import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCoupon = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()

    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]

        // Infos needed on google sheet: Nome	Email	Phone	Cupom	Promo
        const data = JSON.parse(req.body)

        const configSheet = doc.sheetsByIndex[2]
        await configSheet.loadCells('C3:C4')

        const promoMessageCell = configSheet.getCell(3, 2)
        const activatePromoCell = configSheet.getCell(2, 2)

        let Coupon = ''
        let Promo = ''

        if (activatePromoCell.value === true) {
            Coupon = genCoupon()
            Promo = promoMessageCell.value
        }

        await sheet.addRow({
            'Full Name': data.FullName,
            Email: data.Email,
            Phone: data.Phone,
            Suggestion: data.Suggestion,
            Score: parseInt(data.Score),
            'Review Date': moment().format('DD/MM/YYYY, HH:mm:ss'),
            Coupon,
            Promo
        })

        res.end(JSON.stringify({
            showCoupon: Coupon !== '',
            Coupon,
            Promo
        }))
    }
    catch (err) {
        console.log(err)
        res.end('error')
    }
}