# Test Case Dokümanı (Test Cases)

## Doküman Bilgileri

| Alan | Değer |
|------|--------|
| Proje | Customer Management API |
| Doküman | Test Case Dokümanı |
| Versiyon | 1.0 |
| Durum | Taslak |
| Yazar | Erkut Laçın |

---

## Kaynaklar

- [Business Analysis Document](../docs/Business-Analysis-Document.md)
- [Test Senaryoları](01-Test-Scenarios.md)
- [Test Verileri](03-Test-Data.md)

---

# Test Case'ler

## TC-001 - Başarılı Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-001 |
| İlgili Test Senaryosu | TS-001 |
| İlgili API | API-001 |
| İlgili Kabul Kriteri | AC-001 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- API servisi erişilebilir olmalıdır.
- Yetkili kullanıcı sisteme erişebilmelidir.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-001'e TD-001 test verisi ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **201 Created** yanıtı döndürmelidir.
- Müşteri başarıyla oluşturulmalıdır.
- Dönen response içerisinde oluşturulan müşteriye ait bilgiler bulunmalıdır.

---

## TC-002 - Aynı T.C. Kimlik Numarası ile Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-002 |
| İlgili Test Senaryosu | TS-002 |
| İlgili API | API-001 |
| İlgili Kabul Kriteri | AC-002 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- Aynı T.C. Kimlik Numarasına sahip bir müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-001'e TD-002 test verisi ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **409 Conflict** yanıtı döndürmelidir.
- "Bu T.C. Kimlik Numarası ile kayıtlı müşteri bulunmaktadır." hata mesajı gösterilmelidir.

---

## TC-003 - Zorunlu Alan Eksikliği ile Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-003 |
| İlgili Test Senaryosu | TS-003 |
| İlgili API | API-001 |
| İlgili Kabul Kriteri | AC-003 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- API servisi erişilebilir olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-001'e TD-003 test verisi ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **400 Bad Request** yanıtı döndürmelidir.
- Eksik zorunlu alana ilişkin hata mesajı gösterilmelidir.

---

## TC-004 - 18 Yaşından Küçük Müşteri Oluşturma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-004 |
| İlgili Test Senaryosu | TS-004 |
| İlgili API | API-001 |
| İlgili Kabul Kriteri | AC-004 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- API servisi erişilebilir olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-001'e TD-004 test verisi ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **400 Bad Request** yanıtı döndürmelidir.
- "18 yaşından küçük müşteriler için kayıt oluşturulamaz." hata mesajı gösterilmelidir.

---

## TC-005 - Başarılı Müşteri Listesi Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-005 |
| İlgili Test Senaryosu | TS-005 |
| İlgili API | API-002 |
| İlgili Kabul Kriteri | AC-005 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- Sistemde en az bir müşteri kaydı bulunmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-002'ye istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **200 OK** yanıtı döndürmelidir.
- Müşteri listesi başarıyla görüntülenmelidir.

---

## TC-006 - Boş Müşteri Listesi Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-006 |
| İlgili Test Senaryosu | TS-006 |
| İlgili API | API-002 |
| İlgili Kabul Kriteri | AC-006 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- Sistemde kayıtlı müşteri bulunmamalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-002'ye istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **200 OK** yanıtı döndürmelidir.
- Boş liste dönmelidir.

---

## TC-007 - Başarılı Müşteri Detayı Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-007 |
| İlgili Test Senaryosu | TS-007 |
| İlgili API | API-003 |
| İlgili Kabul Kriteri | AC-007 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- İstenen müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-003'e geçerli müşteri kimliği ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **200 OK** yanıtı döndürmelidir.
- İlgili müşteri bilgileri dönmelidir.

---

## TC-008 - Bulunamayan Müşteri Detayı Görüntüleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-008 |
| İlgili Test Senaryosu | TS-008 |
| İlgili API | API-003 |
| İlgili Kabul Kriteri | AC-008 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- İstenen müşteri sistemde bulunmamalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-003'e geçersiz müşteri kimliği ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **404 Not Found** yanıtı döndürmelidir.
- Uygun hata mesajı gösterilmelidir.

---

## TC-009 - Başarılı Müşteri Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-009 |
| İlgili Test Senaryosu | TS-009 |
| İlgili API | API-004 |
| İlgili Kabul Kriteri | AC-009 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- Güncellenecek müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-004'e güncellenebilir alanlar kullanılarak istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **200 OK** yanıtı döndürmelidir.
- Müşteri bilgileri başarıyla güncellenmelidir.

---

## TC-010 - T.C. Kimlik Numarasını Güncellemeye Çalışma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-010 |
| İlgili Test Senaryosu | TS-010 |
| İlgili API | API-004 |
| İlgili Kabul Kriteri | AC-010 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- Güncellenecek müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-004'e T.C. Kimlik Numarasını değiştirecek şekilde istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **400 Bad Request** yanıtı döndürmelidir.
- "T.C. Kimlik Numarası güncellenemez." hata mesajı gösterilmelidir.

---

## TC-011 - Doğum Tarihini Güncellemeye Çalışma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-011 |
| İlgili Test Senaryosu | TS-011 |
| İlgili API | API-004 |
| İlgili Kabul Kriteri | AC-011 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- Güncellenecek müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-004'e doğum tarihini değiştirecek şekilde istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **400 Bad Request** yanıtı döndürmelidir.
- "Doğum Tarihi güncellenemez." hata mesajı gösterilmelidir.

---

## TC-012 - Bulunamayan Müşteriyi Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-012 |
| İlgili Test Senaryosu | TS-012 |
| İlgili API | API-004 |
| İlgili Kabul Kriteri | AC-012 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- İstenen müşteri sistemde bulunmamalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-004'e geçersiz müşteri kimliği ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **404 Not Found** yanıtı döndürmelidir.
- Uygun hata mesajı gösterilmelidir.

---

## TC-013 - Müşteriyi Passive Durumuna Alma

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-013 |
| İlgili Test Senaryosu | TS-013 |
| İlgili API | API-005 |
| İlgili Kabul Kriteri | AC-013 |
| Test Kategorisi | Pozitif |

### Ön Koşullar

- Güncellenecek müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-005'e müşterinin durumunu Passive yapacak şekilde istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **200 OK** yanıtı döndürmelidir.
- Müşteri durumu **Passive** olarak güncellenmelidir.

---

## TC-014 - Bulunamayan Müşterinin Durumunu Güncelleme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-014 |
| İlgili Test Senaryosu | TS-014 |
| İlgili API | API-005 |
| İlgili Kabul Kriteri | AC-014 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- İstenen müşteri sistemde bulunmamalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-005'e geçersiz müşteri kimliği ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **404 Not Found** yanıtı döndürmelidir.
- Uygun hata mesajı gösterilmelidir.

---

## TC-015 - Geçersiz Durum Bilgisi Gönderme

### Genel Bilgiler

| Alan | Değer |
|------|--------|
| Test Case ID | TC-015 |
| İlgili Test Senaryosu | TS-015 |
| İlgili API | API-005 |
| İlgili Kabul Kriteri | AC-015 |
| Test Kategorisi | Negatif |

### Ön Koşullar

- Güncellenecek müşteri sistemde kayıtlı olmalıdır.

### Test Adımları

| Adım | Açıklama |
|------|----------|
| 1 | API-005'e geçersiz durum değeri ile istek gönderilir. |
| 2 | API yanıtı doğrulanır. |

### Beklenen Sonuç

- Sistem **400 Bad Request** yanıtı döndürmelidir.
- "Geçersiz durum bilgisi." hata mesajı gösterilmelidir.































