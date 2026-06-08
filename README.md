# BUSINESS LEVEL UP — танилцуулга вэб

Дараагийн түвшний лидер бэлтгэх **BUSINESS LEVEL UP** сургалтын танилцуулга вэб хуудас.
TUSS.io постеруудын өнгөнд тааруулсан, интерактив слайд танилцуулга.

## Агуулга

```
.
├── index.html                      # Үндсэн вэб хуудас (нэг файл)
├── business-level-up-program.pdf   # Татаж авах хөтөлбөр
├── posters/                        # Илтгэгчдийн постерууд (хөтөлбөр харах → автоматаар гүйнэ)
│   ├── 01-jargalsaikhan.jpg
│   ├── 02-aminzul.jpg
│   ├── 03-batdorj.jpg
│   ├── 04-munkhzul.jpg
│   ├── 05-bayartsengel-kpi.jpg
│   ├── 06-oyu-erdene.jpg
│   └── 07-bayartsengel-compliance.jpg
├── google-apps-script.gs           # Бүртгэлийг Google Sheet рүү бичих backend код
└── .nojekyll                       # GitHub Pages-д файлуудыг шууд серверлэх
```

## Онцлог

- **Хөтөлбөр татах** — товч дарахад шинэ бүтэн хөтөлбөр `business-level-up-program.pdf` (Week 1/2/3) шууд татагдана.
- **Хөтөлбөр** слайд — таны 7 постер хажуу тийшээ автоматаар гүйнэ (хулганаа дээр аваачвал зогсоно, дарж томруулна). Нүүрэн дэх "Хөтөлбөр харах" товч энэ слайд руу аваачна.
- Долоо хоног бүрийн слайдууд цэвэр тайлбартай (цагийн хүснэгтийг хассан) — дэлгэрэнгүй хуваарь PDF хөтөлбөрт байгаа.
- ROI тооцоолуур болон бэлэн байдлын оношилгоо тест хэвээр.

## GitHub дээр шинээр repository үүсгэж байршуулах (хамгийн хялбар арга)

1. https://github.com/new руу орж шинэ repository үүсгэнэ (жишээ нэр: `business-level-up`).
2. Repository-гийн хуудсан дээр **Add file → Upload files** дарна.
3. Энэ хавтасны **бүх агуулгыг** (index.html, `posters/` хавтас, pdf, .nojekyll) чирч буулгана.
4. **Commit changes** дарж хадгална.

### GitHub Pages-аар онлайн нийтлэх

1. Repository → **Settings → Pages**.
2. *Source*-д **Deploy from a branch**, branch-д **main / (root)** сонгоно.
3. Хэдхэн минутын дараа `https://<хэрэглэгчийн-нэр>.github.io/business-level-up/` хаягаар нээгдэнэ.

## Бүртгэлийг Google Sheet дээр харах (CTA форм)

Вэбэд **"Бүртгүүлэх"** товч дарахад бүртгэлийн форм нээгдэнэ (нэр, утас, имэйл, зорилго). Бөглөж илгээсэн мэдээлэл шууд таны **Google Sheet**-д мөр болж нэмэгдэнэ. Тохируулах нь:

1. https://sheets.new дээр шинэ Google Sheet үүсгэнэ.
2. **Extensions → Apps Script** нээж, `google-apps-script.gs` доторх кодыг бүгдийг хуулж тавиад хадгална.
3. **Deploy → New deployment → Web app**:
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - Deploy дарж гарах **Web app URL**-ийг хуулна.
4. `index.html` доторх `const SHEET_ENDPOINT = "";` гэснийг тэр URL-ээр солино.

Үүний дараа бүртгүүлсэн хүн бүр Sheet-д харагдана. Excel болгох бол Sheet дээр **File → Download → Microsoft Excel (.xlsx)**.

> Тэмдэглэл: статик вэб (GitHub Pages) дээр форм шууд Excel рүү бичих боломжгүй тул Google Apps Script-ийг "гүүр" болгож ашиглаж байгаа юм. Endpoint URL нийтэд нээлттэй учир спам бууруулахаар формд нуувчтай (honeypot) талбар суулгасан.

## Git ашиглаж байршуулах (command line)

```bash
git init
git add .
git commit -m "Add Business Level Up presentation site"
git branch -M main
git remote add origin https://github.com/<хэрэглэгчийн-нэр>/business-level-up.git
git push -u origin main
```
