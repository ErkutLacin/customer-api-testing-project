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

| ID | Gereksinim |
|----|------------|
| FR-001 | Sistem, yetkilendirilmiş kullanıcıların zorunlu müşteri bilgilerini girerek yeni bir müşteri kaydı oluşturmasına izin vermelidir. |
| FR-002 | Sistem, yetkilendirilmiş kullanıcıların benzersiz müşteri kimliği kullanarak mevcut müşteri bilgilerini görüntülemesine izin vermelidir. |
| FR-003 | Sistem, yetkilendirilmiş kullanıcıların mevcut müşteriye ait güncellenebilir bilgileri değiştirmesine izin vermelidir. |
| FR-004 | Sistem, yeni müşteri oluşturulmadan önce T.C. Kimlik Numarasının benzersiz olduğunu ve geçerli formatta olduğunu doğrulamalıdır. |
| FR-005 | Sistem, müşteri bilgilerinde yapılan değişiklikleri tarih, saat ve işlemi gerçekleştiren kullanıcı bilgisi ile birlikte kayıt altına almalıdır. |

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

| ID | İş Kuralı |
|----|-----------|
| BR-001 | Her müşteriye ait T.C. Kimlik Numarası sistem içerisinde benzersiz olmalıdır. |
| BR-002 | T.C. Kimlik Numarası 11 haneli ve geçerli formatta olmalıdır. |
| BR-003 | Müşteri adı ve soyadı girilmesi zorunlu alanlardır. |
| BR-004 | Müşteri oluşturulabilmesi için en az 18 yaşında olmalıdır. |
| BR-005 | E-posta adresi zorunlu değildir. Girildiği takdirde sistem içerisinde benzersiz olmalıdır. |
| BR-006 | Telefon numarası zorunludur ve 10 haneli olarak kaydedilmelidir. |
| BR-007 | Pasif duruma alınan müşteriler sistemden fiziksel olarak silinmemelidir. |
| BR-008 | Müşteri oluşturulma tarihi sistem tarafından otomatik olarak atanmalıdır. |
| BR-009 | Müşteri bilgilerinde yapılan her değişiklik denetim kayıtlarına (Audit Log) kaydedilmelidir. |
| BR-010 | Zorunlu alanlardan herhangi biri eksik olduğunda müşteri kaydı oluşturulmamalıdır. |






























