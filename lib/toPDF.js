const axios = require('axios')
const fss = require("fs-extra");
const imgtopdf = require("image-to-pdf");
const PDFDocument = require('pdfkit')
const request = require("request");
const { getRandom } = require('./myfunc2');


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}

async function toPDF2(images, filename, opt = {}) {
	return new Promise(async (resolve, reject) => {
    try {
        let array_page = await images.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
        let count = 0;
        let ResultPdf = [];
        for (let i = 0; i < array_page.length; i++) {
            if (/.webp|.gif/.test(array_page[i])) continue
            //if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
            let image_name = "./tmp/" + filename + i + ".jpg";
            await new Promise((resolve) =>
                request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
            );
            console.log(array_page[i]);
            ResultPdf.push(image_name);
            count++;
        }
    
        await new Promise((resolve) =>
            imgtopdf(ResultPdf, "A4")
                .pipe(fss.createWriteStream("./tmp/" + filename + ".pdf"))
                .on("finish", resolve)
        );
    
        for (let i = 0; i < array_page.length; i++) {
            fss.unlink("./tmp/" + filename + i + ".jpg");
        }
        
} catch(err) {
console.log({ error: err.message }) 
}
    })
}
function nhPDF(conn, from, code, m) {
	return new Promise(async (resolve, reject) => {
        let baseUrl = 'https://nhentai.myweebs.my.id/'
        let nh = await axios.get(baseUrl + `nhentai/get?book=${code}`)
        if(nh.data.success === false) return conn.sendMessage(from, { text: 'wrong doujin code' }, { quoted:m })
        let result = nh.data.data
        console.log(result)
        let restjson = result.image
        let pic = `https://external-content.duckduckgo.com/iu/?u=${result.image[0]}`
let capt = `*ID* : ${`${result.id}`}\n*Title* : ${result.optional_title.english}\n*Tags* : ${result.tags.join(', ')}\n*Artists* : ${result.artist}\n*Languages* : ${result.language}\n*Parodies* : ${result.parodies}\n*Characters* : ${result.characters.join(', ')}\n*Groups* : ${result.group}\n*Pages* : ${result.num_pages}\n*Uploaded* : ${result.upload_date}\n*Link* : https://nhentai.net/g/${code}`
conn.sendMessage(from, { image:{url:pic}, caption:capt}, {quoted:m})
		try {
            let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
            let count = 0;
            let ResultPdf = [];
            
            for (let i = 0; i < array_page.length; i++) {
                if (/.webp|.gif/.test(array_page[i])) continue
                //if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
                let image_name = "./tmp/nhentai/" + code + i + ".jpg";
                await new Promise((resolve) =>
                    request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
                );
                console.log(array_page[i]);
                ResultPdf.push(image_name);
                count++;
            }
        
            await new Promise((resolve) =>
                imgtopdf(ResultPdf, "A4")
                    .pipe(fss.createWriteStream("./tmp/nhentai/" + code + ".pdf"))
                    .on("finish", resolve)
            );
        
            for (let i = 0; i < array_page.length; i++) {
                fss.unlink("./tmp/nhentai/" + code + i + ".jpg");
            }
            
var nhc = await fss.readFileSync(`./tmp/nhentai/${code}.pdf`)
await conn.sendMessage(from, {document: nhc, mimetype: 'application/pdf', fileName: `${code} - ${result.optional_title.english}.pdf` }, {quoted:m})
await sleep(2000)
await fss.unlinkSync(`./tmp/nhentai/${code}.pdf`)
        
} catch(err) {
    console.log({ error: err.message }) 
  }
	})
}

module.exports = { toPDF, toPDF2, nhPDF };