# Test Verileri Dokümanı (Test Data)

## Doküman Bilgileri

| Alan | Değer |
|------|--------|
| Proje | Customer Management API |
| Doküman | Test Verileri |
| Versiyon | 1.0 |
| Durum | Tamamlandı |
| Yazar | Erkut Laçın |

---

## Kaynaklar

- [Business Analysis Document](../docs/Business-Analysis-Document.md)
- [Test Senaryoları](01-Test-Scenarios.md)
- [Test Case Dokümanı](02-Test-Cases.md)

---

# Amaç

Bu doküman, Customer Management API için hazırlanan test senaryoları ve test case'lerde kullanılacak test verilerini içermektedir.

Her test verisi belirli bir test case ile ilişkilendirilmiş olup, API testlerinin tekrar edilebilir, tutarlı ve izlenebilir şekilde yürütülmesini sağlamak amacıyla hazırlanmıştır.

Bu dokümandaki JSON örnekleri doğrudan Postman gibi API test araçlarına kopyalanarak kullanılabilir.

---

# Test Verileri

## TD-001 - Başarılı Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-001 |
| İlgili Test Case | TC-001 |
| İlgili Test Senaryosu | TS-001 |
| İlgili API | API-001 |
| Test Kategorisi | Pozitif |

### Endpoint

```http
POST /api/v1/customers
```

### Request Body

```json
{
  "identityNumber": "12345678901",
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "birthDate": "1995-05-10",
  "phoneNumber": "5551234567",
  "email": "ahmet@test.com",
  "address": "İstanbul"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 201 Created |
| Response | CustomerResponse |
| Status | ACTIVE |
| customerId | Otomatik oluşturulmalıdır. |
| createdDate | Otomatik oluşturulmalıdır. |
| updatedDate | Otomatik oluşturulmalıdır. |
| Sonuç | Yeni müşteri başarıyla oluşturulmalıdır. |

---

# TD-002 - Aynı T.C. Kimlik Numarası ile Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-002 |
| İlgili Test Case | TC-002 |
| İlgili Test Senaryosu | TS-002 |
| İlgili API | API-001 |
| Test Kategorisi | Negatif |

### Ön Koşul

Sistemde aşağıdaki T.C. Kimlik Numarasına sahip bir müşteri kayıtlı olmalıdır.

```text
12345678901
```

### Endpoint

```http
POST /api/v1/customers
```

### Request Body

```json
{
  "identityNumber": "12345678901",
  "firstName": "Mehmet",
  "lastName": "Demir",
  "birthDate": "1992-08-20",
  "phoneNumber": "5559876543",
  "email": "mehmet@test.com",
  "address": "Ankara"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 409 Conflict |
| Response | ErrorResponse |
| Hata Mesajı | Bu T.C. Kimlik Numarası ile kayıtlı müşteri bulunmaktadır. |
| Sonuç | Yeni müşteri oluşturulmamalıdır. |

---

# TD-003 - Zorunlu Alan Eksikliği ile Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-003 |
| İlgili Test Case | TC-003 |
| İlgili Test Senaryosu | TS-003 |
| İlgili API | API-001 |
| Test Kategorisi | Negatif |

### Endpoint

```http
POST /api/v1/customers
```

### Request Body

```json
{
  "firstName": "Ayşe",
  "lastName": "Kaya",
  "birthDate": "1995-03-15",
  "phoneNumber": "5554443322",
  "email": "ayse@test.com",
  "address": "İzmir"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 400 Bad Request |
| Response | ErrorResponse |
| Hata Mesajı | T.C. Kimlik Numarası zorunludur. |
| Sonuç | Yeni müşteri oluşturulmamalıdır. |

---

# TD-004 - 18 Yaşından Küçük Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-004 |
| İlgili Test Case | TC-004 |
| İlgili Test Senaryosu | TS-004 |
| İlgili API | API-001 |
| Test Kategorisi | Negatif |

### Endpoint

```http
POST /api/v1/customers
```

### Request Body

```json
{
  "identityNumber": "98765432109",
  "firstName": "Can",
  "lastName": "Yılmaz",
  "birthDate": "2012-01-01",
  "phoneNumber": "5553332211",
  "email": "can@test.com",
  "address": "Bursa"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 400 Bad Request |
| Response | ErrorResponse |
| Hata Mesajı | 18 yaşından küçük müşteriler için kayıt oluşturulamaz. |
| Sonuç | Yeni müşteri oluşturulmamalıdır. |

---

# TD-005 - Başarılı Müşteri Listesi Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-005 |
| İlgili Test Case | TC-005 |
| İlgili Test Senaryosu | TS-005 |
| İlgili API | API-002 |
| Test Kategorisi | Pozitif |

### Ön Koşul

Sistemde en az bir müşteri kaydı bulunmalıdır.

### Endpoint

```http
GET /api/v1/customers
```

### Request Body

```text
Bu endpoint için request body gönderilmez.
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 200 OK |
| Response | CustomerListResponse |
| Sonuç | Sistemde kayıtlı müşteri listesi başarıyla döndürülmelidir. |

---

# TD-006 - Boş Müşteri Listesi Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-006 |
| İlgili Test Case | TC-006 |
| İlgili Test Senaryosu | TS-006 |
| İlgili API | API-002 |
| Test Kategorisi | Pozitif |

### Ön Koşul

Sistemde kayıtlı müşteri bulunmamalıdır.

### Endpoint

```http
GET /api/v1/customers
```

### Request Body

```text
Bu endpoint için request body gönderilmez.
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 200 OK |
| Response | CustomerListResponse |
| Sonuç | Sistem boş bir müşteri listesi döndürmelidir. |

---

# TD-007 - Başarılı Müşteri Detayı Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-007 |
| İlgili Test Case | TC-007 |
| İlgili Test Senaryosu | TS-007 |
| İlgili API | API-003 |
| Test Kategorisi | Pozitif |

### Ön Koşul

Aşağıdaki müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
GET /api/v1/customers/1783339167137
```

### Request Body

```text
Bu endpoint için request body gönderilmez.
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 200 OK |
| Response | CustomerResponse |
| Sonuç | İlgili müşteriye ait bilgiler başarıyla döndürülmelidir. |

---

# TD-008 - Bulunamayan Müşteri Detayı Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-008 |
| İlgili Test Case | TC-008 |
| İlgili Test Senaryosu | TS-008 |
| İlgili API | API-003 |
| Test Kategorisi | Negatif |

### Ön Koşul

Aşağıdaki müşteri sistemde bulunmamalıdır.

```text
customerId : 9999999999999
```

### Endpoint

```http
GET /api/v1/customers/9999999999999
```

### Request Body

```text
Bu endpoint için request body gönderilmez.
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 404 Not Found |
| Response | ErrorResponse |
| Hata Mesajı | Customer not found. |
| Sonuç | Müşteri bilgisi döndürülmemelidir. |

---

# TD-009 - Başarılı Müşteri Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-009 |
| İlgili Test Case | TC-009 |
| İlgili Test Senaryosu | TS-009 |
| İlgili API | API-004 |
| Test Kategorisi | Pozitif |

### Ön Koşul

Güncellenecek müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
PUT /api/v1/customers/1783339167137
```

### Request Body

```json
{
  "firstName": "Ahmet",
  "lastName": "Yılmaz Güncellendi",
  "phoneNumber": "5557654321",
  "email": "ahmet.updated@test.com",
  "address": "Ankara"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 200 OK |
| Response | CustomerResponse |
| Sonuç | Müşteri bilgileri başarıyla güncellenmelidir. |

---

# TD-010 - T.C. Kimlik Numarasını Güncellemeye Çalışma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-010 |
| İlgili Test Case | TC-010 |
| İlgili Test Senaryosu | TS-010 |
| İlgili API | API-004 |
| Test Kategorisi | Negatif |

### Ön Koşul

Güncellenecek müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
PUT /api/v1/customers/1783339167137
```

### Request Body

```json
{
  "identityNumber": "99999999999",
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "phoneNumber": "5551234567",
  "email": "ahmet@test.com",
  "address": "İstanbul"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 400 Bad Request |
| Response | ErrorResponse |
| Hata Mesajı | T.C. Kimlik Numarası güncellenemez. |
| Sonuç | Müşteri bilgileri güncellenmemelidir. |

---

# TD-011 - Doğum Tarihini Güncellemeye Çalışma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-011 |
| İlgili Test Case | TC-011 |
| İlgili Test Senaryosu | TS-011 |
| İlgili API | API-004 |
| Test Kategorisi | Negatif |

### Ön Koşul

Güncellenecek müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
PUT /api/v1/customers/1783339167137
```

### Request Body

```json
{
  "birthDate": "2005-01-01",
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "phoneNumber": "5551234567",
  "email": "ahmet@test.com",
  "address": "İstanbul"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 400 Bad Request |
| Response | ErrorResponse |
| Hata Mesajı | Doğum Tarihi güncellenemez. |
| Sonuç | Müşteri bilgileri güncellenmemelidir. |

---

# TD-012 - Bulunamayan Müşteriyi Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-012 |
| İlgili Test Case | TC-012 |
| İlgili Test Senaryosu | TS-012 |
| İlgili API | API-004 |
| Test Kategorisi | Negatif |

### Ön Koşul

Aşağıdaki müşteri sistemde bulunmamalıdır.

```text
customerId : 9999999999999
```

### Endpoint

```http
PUT /api/v1/customers/9999999999999
```

### Request Body

```json
{
  "firstName": "Ahmet",
  "lastName": "Yılmaz",
  "phoneNumber": "5551234567",
  "email": "ahmet@test.com",
  "address": "İstanbul"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 404 Not Found |
| Response | ErrorResponse |
| Hata Mesajı | Customer not found. |
| Sonuç | Güncelleme işlemi gerçekleştirilmemelidir. |

---

# TD-013 - Müşteriyi PASSIVE Durumuna Alma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-013 |
| İlgili Test Case | TC-013 |
| İlgili Test Senaryosu | TS-013 |
| İlgili API | API-005 |
| Test Kategorisi | Pozitif |

### Ön Koşul

Güncellenecek müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
PATCH /api/v1/customers/1783339167137/status
```

### Request Body

```json
{
  "status": "PASSIVE"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 200 OK |
| Response | CustomerResponse |
| Status | PASSIVE |
| Sonuç | Müşterinin durumu başarıyla PASSIVE olarak güncellenmelidir. |

---

# TD-014 - Bulunamayan Müşterinin Durumunu Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-014 |
| İlgili Test Case | TC-014 |
| İlgili Test Senaryosu | TS-014 |
| İlgili API | API-005 |
| Test Kategorisi | Negatif |

### Ön Koşul

Aşağıdaki müşteri sistemde bulunmamalıdır.

```text
customerId : 9999999999999
```

### Endpoint

```http
PATCH /api/v1/customers/9999999999999/status
```

### Request Body

```json
{
  "status": "PASSIVE"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 404 Not Found |
| Response | ErrorResponse |
| Hata Mesajı | Customer not found. |
| Sonuç | Durum güncelleme işlemi gerçekleştirilmemelidir. |

---

# TD-015 - Geçersiz Durum Bilgisi Gönderme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Data ID | TD-015 |
| İlgili Test Case | TC-015 |
| İlgili Test Senaryosu | TS-015 |
| İlgili API | API-005 |
| Test Kategorisi | Negatif |

### Ön Koşul

Güncellenecek müşteri sistemde kayıtlı olmalıdır.

```text
customerId : 1783339167137
```

### Endpoint

```http
PATCH /api/v1/customers/1783339167137/status
```

### Request Body

```json
{
  "status": "DELETED"
}
```

### Beklenen Sonuç

| Alan | Beklenen |
|------|----------|
| HTTP Status | 400 Bad Request |
| Response | ErrorResponse |
| Hata Mesajı | Status must be ACTIVE or PASSIVE. |
| Sonuç | Durum güncelleme işlemi gerçekleştirilmemelidir. |

---
