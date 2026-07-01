# İş Analizi Dokümanı

## Proje Bilgileri

| Alan | Değer |
|--------|-------|
| Proje Adı | Müşteri Yönetimi API'si |
| Versiyon | 1.0 |
| Durum | Taslak |
| Yazar | Erkut Laçın |

---

## İçindekiler

1. Proje Genel Bakış
2. İş Problemi
3. Hedefler
4. Proje Kapsamı
5. Paydaşlar
6. Fonksiyonel Gereksinimler
7. Fonksiyonel Olmayan Gereksinimler
8. İş Kuralları
9. Veri Sözlüğü
10. API Gereksinimleri
11. Doğrulama Kuralları
12. Kabul Kriterleri
13. Test Senaryoları
14. Açık Sorular
15. Varsayımlar
16. Versiyon Geçmişi

---

# 1. Proje Genel Bakış

Bu proje, bir İş Analisti tarafından yürütülen uçtan uca analiz, dokümantasyon ve API test süreçlerini göstermek amacıyla bir portföy çalışması olarak hazırlanmıştır.

Proje, dijital bankacılık ortamındaki bir Müşteri Yönetimi API'sinin analiz ve test faaliyetlerini simüle etmektedir. Proje boyunca iş gereksinimleri, fonksiyonel gereksinimler, iş kuralları, API gereksinimleri, test senaryoları ve API testleri adım adım oluşturulacaktır.

Ana amaç bir arka yüz uygulaması geliştirmek değil; bir İş Analistinin analitik düşünme, dokümantasyon becerilerini ve test yaklaşımını gerçekçi bir vaka çalışması üzerinden ortaya koymaktır.

---

# 2. İş Problemi

Müşteri bilgileri şu anda farklı sistemler üzerinde yönetilmekte, bu durum da müşteri oluşturma, güncelleme ve bilgi getirme süreçlerinin standartlaştırılmasını zorlaştırmaktadır.

Ortak bir Müşteri Yönetimi API'si bulunmadığından, mobil bankacılık ve ilgili diğer sistemler müşteri verilerine tek bir standart servis üzerinden erişememekte ve bu verileri yönetememektedir.

Bu durum; müşteri oluşturma, müşteri bilgisi getirme ve müşteri güncelleme işlemlerini tutarlı bir şekilde destekleyebilecek merkezi bir API katmanına ihtiyaç doğurmaktadır.

---

# 3. Hedefler

Bu projenin hedefleri şunlardır:

- Müşteri yönetimi işlemleri için merkezi bir API sağlamak.
- Sistem genelinde müşteri oluşturma, bilgi getirme ve güncelleme süreçlerini standartlaştırmak.
- Farklı uygulamaların müşteri bilgilerine tek bir servis üzerinden erişebilmesini sağlamak.
- Birden fazla sisteme olan bağımlılığı azaltarak veri tutarlılığını artırmak.
- Gelecekteki müşteri yönetimi fonksiyonları için ölçeklenebilir bir temel oluşturmak.

---

# 4. Proje Kapsamı

## Kapsam Dahilinde

Aşağıdaki fonksiyonlar bu projenin kapsamına dahildir:

- Yeni müşteri oluşturma.
- Müşteri bilgilerini getirme.
- Müşteri bilgilerini güncelleme.
- İşlem öncesinde müşteri verilerini doğrulama.
- API'yi kullanacak uygulamalar için standart bir Müşteri Yönetimi API'si sağlama.

## Kapsam Dışında

Aşağıdaki fonksiyonlar bu projenin kapsamına dahil değildir:

- Mobil uygulama UI/UX geliştirmesi.
- Kredi kartı yönetimi.
- Kredi yönetimi.
- Müşteri kimlik doğrulama ve giriş süreçleri.
- Ödeme servisleri ile entegrasyon.

---

# 5. Paydaşlar

| Paydaş | Rol | Sorumluluk |
|--------------|------|----------------|
| Ürün Sahibi | İş Birimi | İş gereksinimlerini ve öncelikleri tanımlar. |
| İş Analisti | Analiz | İş ihtiyaçlarını analiz eder, dokümantasyonu hazırlar ve test süreçlerini destekler. |
| Arka Plan Geliştirici | Geliştirme | Müşteri Yönetimi API'sini geliştirir. |
| QA Mühendisi | Test | Uygulanan fonksiyonları test eder ve hataları raporlar. |
| Mobil Geliştirici | Tüketici | API'yi mobil bankacılık uygulamasına entegre eder. |
| İş Birimi Kullanıcısı | Son Kullanıcı | Kullanıcı Kabul Testlerini (UAT) gerçekleştirir. |

---

# 6. Fonksiyonel Gereksinimler

Bu bölüm, sistemin kullanıcı ihtiyaçlarını karşılamak için yerine getirmesi gereken temel fonksiyonel gereksinimleri içerir.

## Kaynaklar

- [Business Request](Business-Request.md)
- [Stakeholder Interview](Stakeholder-Interview.md)

| ID | Gereksinim | Kaynak |
|----|------------|---------|
| FR-001 | Sistem, yetkilendirilmiş kullanıcıların yeni bir müşteri kaydı oluşturmasına izin vermelidir. | Stakeholder Interview - S3 |
| FR-002 | Sistem, yetkilendirilmiş kullanıcıların mevcut müşteri bilgilerini görüntülemesine izin vermelidir. | Stakeholder Interview - S3 |
| FR-003 | Sistem, yetkilendirilmiş kullanıcıların mevcut müşteri bilgilerini güncellemesine izin vermelidir. | Stakeholder Interview - S3 |
| FR-004 | Sistem, müşteriyi fiziksel olarak silmek yerine pasif duruma alabilmelidir. | Stakeholder Interview - S8 |
| FR-005 | Sistem, müşteri oluşturulurken zorunlu alanların eksiksiz girildiğini doğrulamalıdır. | Stakeholder Interview - S5 |
| FR-006 | Sistem, müşteri oluşturulurken T.C. Kimlik Numarasının benzersiz olduğunu doğrulamalıdır. | Stakeholder Interview - S6 |
| FR-007 | Sistem, T.C. Kimlik Numarası ve Doğum Tarihi bilgilerinin güncellenmesine izin vermemelidir. | Stakeholder Interview - S7 |

---

# 7. Fonksiyonel Olmayan Gereksinimler

Bu bölüm, sistemin yerine getirmesi gereken performans, güvenlik, kullanılabilirlik ve güvenilirlik gibi fonksiyonel olmayan gereksinimleri içerir.

| ID | Gereksinim |
|----|------------|
| NFR-001 | Sistem, müşteri bilgisi görüntüleme isteklerine normal yük altında en fazla 2 saniye içerisinde yanıt vermelidir. |
| NFR-002 | Sistem, tüm API isteklerini HTTPS protokolü üzerinden güvenli bir şekilde sunmalıdır. |
| NFR-003 | Sistem, yalnızca yetkilendirilmiş kullanıcıların müşteri bilgilerine erişmesine izin vermelidir. |
| NFR-004 | Sistem, beklenmeyen hatalarda standart hata kodları ve açıklayıcı hata mesajları döndürmelidir. |
| NFR-005 | Sistem, müşteri bilgileri üzerinde gerçekleştirilen tüm işlemleri denetlenebilir (audit) şekilde kayıt altına almalıdır. |

---

# 8. İş Kuralları (Business Rules)

Bu bölüm, sistemin uyması gereken iş kurallarını tanımlar. İş kuralları; fonksiyonel gereksinimleri destekler, veri doğrulama süreçlerine yön verir ve test senaryolarının temelini oluşturur.

## Kaynaklar

- [Business Request](Business-Request.md)
- [Stakeholder Interview](Stakeholder-Interview.md)

| ID | Kategori | İş Kuralı | İlgili Gereksinim | Kaynak |
|----|-----------|------------|-------------------|---------|
| BR-001 | Kimlik | Her müşteriye ait T.C. Kimlik Numarası sistem içerisinde benzersiz olmalıdır. | FR-006 | Stakeholder Interview - S6 |
| BR-002 | Kimlik | T.C. Kimlik Numarası 11 haneli ve geçerli formatta olmalıdır. | FR-005 | Stakeholder Interview - S6 |
| BR-003 | Müşteri | Müşteri oluşturulabilmesi için en az 18 yaşında olmalıdır. | FR-005 | Stakeholder Interview - S6 |
| BR-004 | İletişim | E-posta adresi girildiği takdirde sistem içerisinde benzersiz olmalıdır. | FR-005 | Stakeholder Interview - S6 |
| BR-005 | İletişim | Telefon numarası 10 haneli olarak kaydedilmelidir. | FR-005 | Stakeholder Interview - S6 |
| BR-006 | Güncelleme | T.C. Kimlik Numarası güncellenemez. | FR-007 | Stakeholder Interview - S7 |
| BR-007 | Güncelleme | Doğum Tarihi güncellenemez. | FR-007 | Stakeholder Interview - S7 |
| BR-008 | Silme | Müşteri kayıtları fiziksel olarak silinmemelidir. | FR-004 | Stakeholder Interview - S8 |
| BR-009 | Silme | Silinen müşteriler **Passive** durumuna alınmalıdır. | FR-004 | Stakeholder Interview - S8 |

---

# 9. Veri Sözlüğü (Data Dictionary)

Bu bölüm, Customer Management API kapsamında kullanılacak veri alanlarını ve temel özelliklerini tanımlar.

## Kaynaklar

- [Stakeholder Interview - 02](Stakeholder-Interview-02.md)

| Alan | JSON Key | Veri Tipi | Zorunlu | Benzersiz | Güncellenebilir | Açıklama | Karar Kaynağı | Referans |
|------|----------|-----------|----------|-----------|-----------------|----------|---------------|-----------|
| Customer ID | customerId | NUMBER | Evet | Evet | Hayır | Sistem tarafından otomatik oluşturulan müşteri numarası. | Teknik Analiz | Stakeholder Interview - 02 / S3 |
| T.C. Kimlik Numarası | identityNumber | CHAR(11) | Evet | Evet | Hayır | Müşteriye ait benzersiz kimlik numarası. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2, S4 |
| Ad | firstName | VARCHAR2(50) | Evet | Hayır | Evet | Müşterinin adı. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2 |
| Soyad | lastName | VARCHAR2(50) | Evet | Hayır | Evet | Müşterinin soyadı. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2 |
| Doğum Tarihi | birthDate | DATE | Evet | Hayır | Hayır | Müşterinin doğum tarihi. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2, S4 |
| Cep Telefonu | phoneNumber | VARCHAR2(10) | Evet | Hayır | Evet | Müşterinin cep telefonu numarası. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2 |
| E-posta | email | VARCHAR2(100) | Hayır | Evet | Evet | Müşterinin e-posta adresi. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2 |
| Adres | address | VARCHAR2(250) | Hayır | Hayır | Evet | Müşterinin adres bilgisi. | Business + Teknik Analiz | Stakeholder Interview - 02 / S1, S2 |
| Durum | status | VARCHAR2(20) | Evet | Hayır | Evet | Müşterinin aktif/pasif durumu. Varsayılan değer **Active**'dir. | Business + Teknik Analiz | Stakeholder Interview - 02 / S3, S5 |
| Oluşturulma Tarihi | createdDate | DATE | Evet | Hayır | Hayır | Kaydın oluşturulduğu tarih. Sistem tarafından atanır. | Teknik Analiz | Stakeholder Interview - 02 / S3 |
| Güncellenme Tarihi | updatedDate | DATE | Evet | Hayır | Hayır | Son güncelleme tarihi. Sistem tarafından otomatik güncellenir. | Teknik Analiz | Stakeholder Interview - 02 / S3 |

---

# 10. API Gereksinimleri

Bu bölüm, Customer Management API kapsamında sunulacak servisleri ve bu servislere ait temel gereksinimleri tanımlar.

## Kaynaklar

- [Stakeholder Interview - 03](Stakeholder-Interview-03.md)
- [Veri Sözlüğü](#9-veri-sözlüğü-data-dictionary)

| ID | HTTP Method | Endpoint | Request Model | Response Model | Status Codes | İlgili FR | Kaynak |
|----|-------------|----------|---------------|----------------|--------------|-----------|---------|
| API-001 | POST | /api/v1/customers | CreateCustomerRequest | CustomerResponse | 201, 400, 409, 500 | FR-001 | Stakeholder Interview - 03 / S2, S3, S4, S5 |
| API-002 | GET | /api/v1/customers | - | CustomerListResponse | 200, 500 | FR-002 | Stakeholder Interview - 03 / S2, S3, S4, S5 |
| API-003 | GET | /api/v1/customers/{customerId} | - | CustomerResponse | 200, 404, 500 | FR-002 | Stakeholder Interview - 03 / S2, S3, S4, S5 |
| API-004 | PUT | /api/v1/customers/{customerId} | UpdateCustomerRequest | CustomerResponse | 200, 400, 404, 500 | FR-003 | Stakeholder Interview - 03 / S2, S3, S4, S5 |
| API-005 | PATCH | /api/v1/customers/{customerId}/status | UpdateCustomerStatusRequest | CustomerResponse | 200, 400, 404, 500 | FR-004 | Stakeholder Interview - 03 / S2, S3, S4, S5 |

---

# 11. Doğrulama Kuralları (Validation Rules)

Bu bölüm, sistemin veri girişleri sırasında uygulaması gereken doğrulama kurallarını tanımlar. Doğrulama kuralları, iş kurallarının sistem davranışına dönüştürülmüş halidir.

## Kaynaklar

- [İş Kuralları](#8-iş-kuralları-business-rules)
- [Veri Sözlüğü](#9-veri-sözlüğü-data-dictionary)
- [API Gereksinimleri](#10-api-gereksinimleri)

| ID | Alan | Doğrulama Kuralı | Hata Mesajı | İlgili BR | İlgili DD | İlgili API | Kaynak |
|----|------|------------------|-------------|-----------|-----------|------------|---------|
| VR-001 | T.C. Kimlik Numarası | Alan boş bırakılamaz. | T.C. Kimlik Numarası zorunludur. | BR-001 | DD-002 | API-001 | Business Rules |
| VR-002 | T.C. Kimlik Numarası | 11 haneli olmalıdır. | T.C. Kimlik Numarası 11 haneli olmalıdır. | BR-002 | DD-002 | API-001 | Business Rules |
| VR-003 | T.C. Kimlik Numarası | Sistem içerisinde benzersiz olmalıdır. | Bu T.C. Kimlik Numarası ile kayıtlı müşteri bulunmaktadır. | BR-001 | DD-002 | API-001 | Business Rules |
| VR-004 | Ad | Alan boş bırakılamaz. | Ad alanı zorunludur. | BR-003 | DD-003 | API-001 | Business Rules |
| VR-005 | Soyad | Alan boş bırakılamaz. | Soyad alanı zorunludur. | BR-003 | DD-004 | API-001 | Business Rules |
| VR-006 | Doğum Tarihi | Müşteri en az 18 yaşında olmalıdır. | 18 yaşından küçük müşteriler için kayıt oluşturulamaz. | BR-003 | DD-005 | API-001 | Business Rules |
| VR-007 | Cep Telefonu | 10 haneli olmalıdır. | Cep telefonu numarası 10 haneli olmalıdır. | BR-005 | DD-006 | API-001 | Business Rules |
| VR-008 | E-posta | Girilmişse sistem içerisinde benzersiz olmalıdır. | Bu e-posta adresi başka bir müşteri tarafından kullanılmaktadır. | BR-004 | DD-007 | API-001 | Business Rules |
| VR-009 | Durum | Yeni müşteri oluşturulduğunda varsayılan değer Active olmalıdır. | - | BR-009 | DD-009 | API-001 | Business Rules |
| VR-010 | T.C. Kimlik Numarası | Güncelleme işleminde değiştirilemez. | T.C. Kimlik Numarası güncellenemez. | BR-006 | DD-002 | API-004 | Business Rules |
| VR-011 | Doğum Tarihi | Güncelleme işleminde değiştirilemez. | Doğum Tarihi güncellenemez. | BR-007 | DD-005 | API-004 | Business Rules |
















