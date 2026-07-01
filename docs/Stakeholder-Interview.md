# Stakeholder Interview

## Toplantı Bilgileri

| Alan | Değer |
|------|--------|
| Toplantı Adı | Customer Management API - Requirement Gathering Meeting |
| Tarih | XX.XX.2026 |
| Business Analyst | Erkut Laçın |
| Stakeholder | Ayşe Yılmaz (Product Owner) |

---

## Toplantı Amacı

Bu toplantının amacı, Customer Management API projesine ait iş ihtiyaçlarını netleştirmek, eksik gereksinimleri belirlemek ve analiz dokümanının hazırlanabilmesi için gerekli bilgileri toplamaktır.

---

# Görüşme Notları

---

## S1. Bu projenin ortaya çıkmasına neden olan temel iş ihtiyacı nedir?

**Cevap:**

Şu anda müşteri bilgileri farklı sistemlerde tutulmaktadır. Bu nedenle müşteri oluşturma, güncelleme ve görüntüleme işlemleri farklı uygulamalarda farklı yöntemlerle yapılmaktadır. Ortak bir Customer Management API oluşturularak bu süreçlerin standart hale getirilmesi hedeflenmektedir.

---

## S2. Bu API'yi hangi sistemler veya uygulamalar kullanacak?

**Cevap:**

İlk fazda bu API aşağıdaki sistemler tarafından kullanılacaktır:

- Mobil Bankacılık
- İnternet Bankacılığı
- CRM Uygulaması

İlerleyen fazlarda diğer iç sistemlerin de bu API üzerinden müşteri bilgilerine erişmesi planlanmaktadır.

---

## S3. Bu API üzerinden hangi işlemler gerçekleştirilebilecek?

**Cevap:**

İlk fazda aşağıdaki işlemler desteklenecektir:

- Yeni müşteri oluşturma
- Müşteri bilgilerini görüntüleme
- Müşteri bilgilerini güncelleme
- Müşteriyi pasif duruma alma

Fiziksel silme (hard delete) yapılmayacaktır.

---

## S4. Müşteri oluştururken hangi bilgiler alınacak?

**Cevap:**

- T.C. Kimlik Numarası
- Ad
- Soyad
- Doğum Tarihi
- Cep Telefonu
- E-posta
- Adres

---

## S5. Bu bilgilerden hangileri zorunlu olacak?

**Cevap:**

Zorunlu alanlar:

- T.C. Kimlik Numarası
- Ad
- Soyad
- Doğum Tarihi
- Cep Telefonu

Opsiyonel alanlar:

- E-posta
- Adres

---

## S6. İş kuralları nelerdir?

**Cevap:**

- Her T.C. Kimlik Numarası benzersiz olmalıdır.
- T.C. Kimlik Numarası 11 haneli olmalıdır.
- Müşteri en az 18 yaşında olmalıdır.
- E-posta girilmişse benzersiz olmalıdır.
- Telefon numarası 10 haneli olmalıdır.

---

## S7. Güncellenemeyecek alanlar var mı?

**Cevap:**

Evet. Aşağıdaki alanlar güncellenemez:

- T.C. Kimlik Numarası
- Doğum Tarihi

Diğer müşteri bilgileri güncellenebilir.

---

## S8. Müşteri silinecek mi?

**Cevap:**

Hayır. Bankacılık regülasyonları nedeniyle müşteri fiziksel olarak silinmeyecektir.

Müşteri kaydı silinmek yerine **Passive** durumuna alınacaktır.

---

## S9. Projenin başarılı olduğunu nasıl anlayacağız?

**Cevap:**

Projenin başarılı olduğu aşağıdaki çıktılarla değerlendirilecektir:

- Tüm ilgili uygulamaların aynı Customer Management API'yi kullanması
- Yeni müşteri oluşturma süresinin azalması
- Veri tutarsızlıklarının azaltılması
- Yeni uygulamaların entegrasyon süresinin kısalması
