/**
 * BUSINESS LEVEL UP — бүртгэлийн backend (Google Apps Script)
 * --------------------------------------------------------------
 * Энэ скрипт нь вэб дэх бүртгэлийн формоос ирсэн мэдээллийг
 * Google Sheet-д мөр болгон нэмнэ.
 *
 * ⚙️ ТОХИРУУЛАХ АЛХАМ:
 *  1. https://sheets.new дээр шинэ Google Sheet үүсгэнэ.
 *  2. Цэс: Extensions → Apps Script.
 *  3. Доорх кодыг бүгдийг хуулж тавиад хадгална (💾).
 *  4. Deploy → New deployment → Type: "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *     Deploy дарж, гарч ирэх "Web app URL"-ийг хуулна.
 *  5. index.html доторх  const SHEET_ENDPOINT = "";  гэснийг
 *     тэр URL-ээр солино. Жишээ:
 *        const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfyc..../exec";
 *
 * ✅ Үүний дараа вэбээр бүртгүүлсэн хүн бүр энэ Sheet-д шинэ мөр болж нэмэгдэнэ.
 *    Sheet → File → Download → Microsoft Excel (.xlsx) гэж Excel болгож татаж болно.
 */

const SHEET_NAME = 'Бүртгэл';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    // Толгой мөр (зөвхөн нэг удаа)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Огноо', 'Бүтэн нэр', 'Утас', 'Имэйл', 'Зорилго']);
    }

    const p = (e && e.parameter) ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      p.name  || '',
      p.phone || '',
      p.email || '',
      p.goal  || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'Business Level Up бүртгэлийн endpoint ажиллаж байна.'
  );
}
