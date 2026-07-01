# Stakeholder Interview - 03

## Toplantı Bilgileri

| Alan | Değer |
|------|--------|
| Toplantı Adı | Customer Management API - API Design Workshop |
| Tarih | XX.XX.2026 |
| Business Analyst | Erkut Laçın |
| Product Owner | Ayşe Yılmaz |
| Technical Lead | Mehmet Kaya |

---

## Toplantı Amacı

Bu toplantının amacı, Customer Management API'nin iş gereksinimlerini karşılayacak API tasarımını belirlemek ve geliştirilecek servislerin kapsamını netleştirmektir.

---

# Görüşme Notları

---

## S1. API üzerinden hangi işlemler desteklenmelidir?

**Product Owner:**

İlk faz kapsamında aşağıdaki işlemler desteklenmelidir.

- Yeni müşteri oluşturma
- Müşteri bilgilerini görüntüleme
- Müşteri bilgilerini güncelleme
- Müşteriyi pasif duruma alma

---

## S2. Bu işlemler için hangi HTTP metodları kullanılmalıdır?

**Technical Lead:**

REST standartlarına uygun olarak aşağıdaki metodlar kullanılmalıdır.

| İşlem | HTTP Method |
|-------|-------------|
| Yeni müşteri oluşturma | POST |
| Müşteri bilgisi görüntüleme | GET |
| Müşteri güncelleme | PUT |
| Müşteri durumunu Passive olarak güncelleme | PATCH |

---

## S3. Endpoint yapısı nasıl olmalıdır?

**Technical Lead:**

Aşağıdaki endpoint yapısı kullanılacaktır.

| İşlem | Endpoint |
|-------|----------|
| Müşteri Oluştur | /api/v1/customers |
| Müşteri Listele | /api/v1/customers |
| Müşteri Detayı | /api/v1/customers/{customerId} |
| Müşteri Güncelle | /api/v1/customers/{customerId} |
| Müşteri Durumunu Güncelle | /api/v1/customers/{customerId}/status |

---

## S4. API başarılı olduğunda hangi HTTP durum kodları döndürülmelidir?

**Technical Lead:**

| İşlem | Status Code |
|-------|-------------|
| Başarılı Listeleme | 200 OK |
| Başarılı Detay | 200 OK |
| Başarılı Oluşturma | 201 Created |
| Başarılı Güncelleme | 200 OK |
| Başarılı Pasife Alma | 200 OK |

---

## S5. API başarısız olduğunda hangi durum kodları kullanılmalıdır?

**Technical Lead:**

| Durum | Status Code |
|--------|-------------|
| Geçersiz veri | 400 Bad Request |
| Yetkisiz erişim | 401 Unauthorized |
| Kayıt bulunamadı | 404 Not Found |
| Aynı TCKN ile kayıt mevcut | 409 Conflict |
| Beklenmeyen sistem hatası | 500 Internal Server Error |

---

## S6. API'de versiyonlama kullanılacak mı?

**Technical Lead:**

Evet.

İlk versiyon aşağıdaki formatta yayınlanacaktır.

```text
/api/v1/customers
```

İleride geriye dönük uyumluluğun korunabilmesi için versiyonlama kullanılacaktır.
