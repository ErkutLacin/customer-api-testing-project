# Test Verileri (Test Data)

## Doküman Bilgileri

| Alan | Değer |
|------|--------|
| Proje | Customer Management API |
| Doküman | Test Verileri |
| Versiyon | 1.0 |
| Durum | Taslak |
| Yazar | Erkut Laçın |

---

## TD-001 - Geçerli Müşteri Verisi

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

## TD-002 - Mevcut T.C. Kimlik Numarası

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

## TD-003 - Eksik Zorunlu Alan

```json
{
  "identityNumber": "23456789012",
  "lastName": "Demir",
  "birthDate": "1994-03-15",
  "phoneNumber": "5552223344",
  "email": "ayse.demir@example.com",
  "address": "Ankara"
}
```

---

## TD-004 - 18 Yaşından Küçük Müşteri

```json
{
  "identityNumber": "34567890123",
  "firstName": "Can",
  "lastName": "Yılmaz",
  "birthDate": "2010-05-10",
  "phoneNumber": "5559876543",
  "email": "can.yilmaz@example.com",
  "address": "İzmir"
}
```

---

## TD-005 - Geçerli Güncelleme Verisi

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

## TD-006 - T.C. Kimlik Numarası Güncelleme Denemesi

```json
{
  "identityNumber": "99999999999"
}
```

---

## TD-007 - Doğum Tarihi Güncelleme Denemesi

```json
{
  "birthDate": "2001-01-01"
}
```

---

## TD-008 - Geçerli Durum Güncelleme Verisi

```json
{
  "status": "PASSIVE"
}
```

---

## TD-009 - Geçersiz Durum Güncelleme Verisi

```json
{
  "status": "DELETED"
}
```
