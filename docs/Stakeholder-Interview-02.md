# Stakeholder Interview - 02

## Toplantı Bilgileri

| Alan | Değer |
|------|--------|
| Toplantı Adı | Customer Management API - Data & Validation Workshop |
| Tarih | XX.XX.2026 |
| Business Analyst | Erkut Laçın |
| Stakeholder | Ayşe Yılmaz (Product Owner) |

---

## Toplantı Amacı

Bu toplantının amacı, Customer Management API projesinde kullanılacak veri alanlarını, alan özelliklerini ve doğrulama kurallarını netleştirmektir.

---

# Görüşme Notları
## S1. Müşteri oluştururken hangi bilgiler kullanıcı tarafından girilecek?

**Cevap:**

Kullanıcının aşağıdaki bilgileri girmesi beklenmektedir:

- T.C. Kimlik Numarası
- Ad
- Soyad
- Doğum Tarihi
- Cep Telefonu
- E-posta
- Adres

---

## S2. Bu alanlardan hangileri zorunlu olacak?

**Cevap:**

**Zorunlu Alanlar**

- T.C. Kimlik Numarası
- Ad
- Soyad
- Doğum Tarihi
- Cep Telefonu

**Opsiyonel Alanlar**

- E-posta
- Adres

---

## S3. Sistem tarafından otomatik oluşturulacak alanlar olacak mı?

**Cevap:**

Evet.

Sistem aşağıdaki alanları otomatik olarak oluşturmalıdır.

- Customer ID
- Oluşturulma Tarihi
- Güncellenme Tarihi
- Durum (Active / Passive)

---

## S4. Güncellenemeyecek alanlar hangileri?

**Cevap:**

Aşağıdaki alanlar güncellenememelidir.

- Customer ID
- T.C. Kimlik Numarası
- Doğum Tarihi
- Oluşturulma Tarihi

---

## S5. Varsayılan değer atanacak alan var mı?

**Cevap:**

Evet.

Yeni oluşturulan her müşteri için sistem tarafından;

- Durum = Active

olarak atanmalıdır.

---

## S6. Alanlar için maksimum karakter sınırı olacak mı?

**Cevap:**

İş birimi açısından aşağıdaki sınırlar belirlenmiştir.

| Alan | Maksimum Uzunluk |
|------|------------------:|
| Ad | 50 karakter |
| Soyad | 50 karakter |
| E-posta | 100 karakter |
| Adres | 250 karakter |

Teknik veri tipleri ve kolon uzunlukları analiz sürecinde Business Analyst ve yazılım ekibi tarafından netleştirilecektir.
