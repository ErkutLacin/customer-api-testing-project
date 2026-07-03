# Test Senaryoları (Test Scenarios)

## Doküman Bilgileri

| Alan | Değer |
|------|--------|
| Proje | Customer Management API |
| Doküman | Test Senaryoları |
| Versiyon | 1.0 |
| Durum | Taslak |
| Yazar | Erkut Laçın |

---

## Kaynaklar

- [Business Analysis Document](../docs/Business-Analysis-Document.md)

---

# Test Senaryoları

| ID | Test Senaryosu | Test Kategorisi | İlgili API | İlgili AC | Durum |
|----|----------------|-----------------|------------|-----------|--------|
| TS-001 | Başarılı müşteri oluşturma | Pozitif | API-001 | AC-001 | Draft |
| TS-002 | Aynı T.C. Kimlik Numarası ile müşteri oluşturma | Negatif | API-001 | AC-002 | Draft |
| TS-003 | Zorunlu alan eksikliği ile müşteri oluşturma | Negatif | API-001 | AC-003 | Draft |
| TS-004 | 18 yaşından küçük müşteri oluşturma | Negatif | API-001 | AC-004 | Draft |
| TS-005 | Başarılı müşteri listesi görüntüleme | Pozitif | API-002 | AC-005 | Draft |
| TS-006 | Sistemde müşteri bulunmadığında boş liste döndürülmesi | Pozitif | API-002 | AC-006 | Draft |
| TS-007 | Başarılı müşteri detayı görüntüleme | Pozitif | API-003 | AC-007 | Draft |
| TS-008 | Bulunamayan müşteri detayı görüntüleme | Negatif | API-003 | AC-008 | Draft |
| TS-009 | Başarılı müşteri güncelleme | Pozitif | API-004 | AC-009 | Draft |
| TS-010 | T.C. Kimlik Numarasını güncellemeye çalışma | Negatif | API-004 | AC-010 | Draft |
| TS-011 | Doğum Tarihini güncellemeye çalışma | Negatif | API-004 | AC-011 | Draft |
| TS-012 | Bulunamayan müşteriyi güncelleme | Negatif | API-004 | AC-012 | Draft |
| TS-013 | Müşteriyi Passive durumuna alma | Pozitif | API-005 | AC-013 | Draft |
| TS-014 | Bulunamayan müşterinin durumunu güncelleme | Negatif | API-005 | AC-014 | Draft |
| TS-015 | Geçersiz durum bilgisi gönderme | Negatif | API-005 | AC-015 | Draft |























