# API Modelleri

## Doküman Bilgileri

| Alan | Değer |
|------|--------|
| Proje | Customer Management API |
| Doküman | API Modelleri |
| Versiyon | 1.0 |
| Durum | Taslak |
| Yazar | Erkut Laçın |

---

## Kaynaklar

- [Business Analysis Document](../docs/Business-Analysis-Document.md)
- [Test Case Dokümanı](../testing/Test-Cases.md)

---

# Request Modelleri

## CreateCustomerRequest

### Kullanım Amacı

Yeni müşteri oluşturma isteğinde kullanılan request modelidir.

### İlgili Bilgiler

| Alan | Değer |
|------|--------|
| HTTP Method | POST |
| Endpoint | /api/v1/customers |
| İlgili Test Case'ler | TC-001, TC-002, TC-003, TC-004 |

### Alanlar

| JSON Key | Veri Tipi | Zorunlu | Açıklama |
|----------|-----------|----------|----------|
| identityNumber | CHAR(11) | Evet | Müşteriye ait benzersiz T.C. Kimlik Numarası. |
| firstName | VARCHAR2(50) | Evet | Müşterinin adı. |
| lastName | VARCHAR2(50) | Evet | Müşterinin soyadı. |
| birthDate | DATE | Evet | Müşterinin doğum tarihi. |
| phoneNumber | VARCHAR2(10) | Evet | Cep telefonu numarası. |
| email | VARCHAR2(100) | Hayır | Müşterinin e-posta adresi. |
| address | VARCHAR2(250) | Hayır | Müşterinin adres bilgisi. |

### Örnek JSON

```json
{
  "identityNumber": "12345678901",
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "birthDate": "1995-05-10",
  "phoneNumber": "5551234567",
  "email": "ahmet.yilmaz@example.com",
  "address": "İstanbul"
}
```

---

## UpdateCustomerRequest

### Kullanım Amacı

Mevcut müşteri bilgilerini güncelleme isteğinde kullanılan request modelidir.

### İlgili Bilgiler

| Alan | Değer |
|------|--------|
| HTTP Method | PUT |
| Endpoint | /api/v1/customers/{customerId} |
| İlgili Test Case'ler | TC-009, TC-010, TC-011, TC-012 |

### Alanlar

| JSON Key | Veri Tipi | Zorunlu | Açıklama |
|----------|-----------|----------|----------|
| firstName | VARCHAR2(50) | Evet | Müşterinin adı. |
| lastName | VARCHAR2(50) | Evet | Müşterinin soyadı. |
| phoneNumber | VARCHAR2(10) | Evet | Cep telefonu numarası. |
| email | VARCHAR2(100) | Hayır | Müşterinin e-posta adresi. |
| address | VARCHAR2(250) | Hayır | Müşterinin adres bilgisi. |

### Örnek JSON

```json
{
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "phoneNumber": "5557654321",
  "email": "ahmet.updated@example.com",
  "address": "İstanbul / Kadıköy"
}
```

---

## UpdateCustomerStatusRequest

### Kullanım Amacı

Müşterinin durum bilgisini güncelleme isteğinde kullanılan request modelidir.

### İlgili Bilgiler

| Alan | Değer |
|------|--------|
| HTTP Method | PATCH |
| Endpoint | /api/v1/customers/{customerId}/status |
| İlgili Test Case'ler | TC-013, TC-014, TC-015 |

### Alanlar

| JSON Key | Veri Tipi | Zorunlu | Açıklama |
|----------|-----------|----------|----------|
| status | VARCHAR2(20) | Evet | Müşterinin yeni durum bilgisi. Geçerli değerler: ACTIVE, PASSIVE. |

### Örnek JSON

```json
{
  "status": "PASSIVE"
}
```

---

# Response Modelleri

## CustomerResponse

### Kullanım Amacı

Müşteri oluşturma, müşteri detayı görüntüleme, müşteri güncelleme ve müşteri durum güncelleme işlemlerinde döndürülen response modelidir.

### Alanlar

| JSON Key | Veri Tipi | Açıklama |
|----------|-----------|----------|
| customerId | NUMBER | Sistem tarafından oluşturulan benzersiz müşteri numarası. |
| identityNumber | CHAR(11) | Müşteriye ait T.C. Kimlik Numarası. |
| firstName | VARCHAR2(50) | Müşterinin adı. |
| lastName | VARCHAR2(50) | Müşterinin soyadı. |
| birthDate | DATE | Müşterinin doğum tarihi. |
| phoneNumber | VARCHAR2(10) | Cep telefonu numarası. |
| email | VARCHAR2(100) | E-posta adresi. |
| address | VARCHAR2(250) | Adres bilgisi. |
| status | VARCHAR2(20) | Müşterinin güncel durumu. |
| createdDate | DATE | Kaydın oluşturulduğu tarih. |
| updatedDate | DATE | Son güncelleme tarihi. |

### Örnek JSON

```json
{
  "customerId": 10001,
  "identityNumber": "12345678901",
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "birthDate": "1995-05-10",
  "phoneNumber": "5551234567",
  "email": "ahmet.yilmaz@example.com",
  "address": "İstanbul",
  "status": "ACTIVE",
  "createdDate": "2026-07-01",
  "updatedDate": "2026-07-01"
}
```

---

## CustomerListResponse

### Kullanım Amacı

Müşteri listesi görüntüleme işleminde döndürülen response modelidir.

### Örnek JSON

```json
[
  {
    "customerId": 10001,
    "identityNumber": "12345678901",
    "firstName": "Ahmet",
    "lastName": "Yılmaz",
    "birthDate": "1995-05-10",
    "phoneNumber": "5551234567",
    "email": "ahmet.yilmaz@example.com",
    "address": "İstanbul",
    "status": "ACTIVE",
    "createdDate": "2026-07-01",
    "updatedDate": "2026-07-01"
  }
]
```

---

## ErrorResponse

### Kullanım Amacı

API işlemleri sırasında oluşan hatalarda döndürülen ortak hata response modelidir.

### Alanlar

| JSON Key | Veri Tipi | Açıklama |
|----------|-----------|----------|
| timestamp | DATETIME | Hatanın oluştuğu tarih ve saat bilgisi. |
| status | NUMBER | HTTP durum kodu. |
| error | VARCHAR2(100) | Hata tipi. |
| message | VARCHAR2(250) | Kullanıcıya veya istemciye döndürülen hata mesajı. |
| path | VARCHAR2(250) | Hatanın oluştuğu endpoint bilgisi. |

### Örnek JSON

```json
{
  "timestamp": "2026-07-01T10:30:00",
  "status": 400,
  "error": "Bad Request",
  "message": "T.C. Kimlik Numarası 11 haneli olmalıdır.",
  "path": "/api/v1/customers"
}
```
