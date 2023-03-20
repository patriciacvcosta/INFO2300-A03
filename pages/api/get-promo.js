import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })

        await doc.loadInfo()

        const configSheet = doc.sheetsByIndex[2]
        await configSheet.loadCells('C3:C4')

        const activatePromoCell = configSheet.getCell(2, 2)
        const promoMessageCell = configSheet.getCell(3, 2)

        res.end(JSON.stringify({
            showCoupon: activatePromoCell.value === true,
            message: promoMessageCell.value
        }))
    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }

}