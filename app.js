
export default {
    props: {
        initiatorName: String,
        collectionName: String,
    },
    data() {
        return {
            cardNumber: '',
            expiryDate: '',
            cvc: '',
            amount: '',
            name: '',
            message: '',
            errorMessage: '',
        };
    },
    methods: {
        validateCardNumber() {
            // Валидация номера карты по Луна-алгоритму
        },
        async submitPayment() {
            // Функция для имитации отправки данных
            try {
                const response = await this.sendPaymentData();
                if (response.success) {
                    window.location.href = this.successRedirectUrl;
                } else {
                    this.errorMessage = 'Не удалось выполнить оплату';
                }
            } catch (error) {
                this.errorMessage = 'Ошибка отправки данных';
            }
        },
        sendPaymentData() {
            const payload = {
                api_key: "ключ_терминала",
                transaction: "идентификатор_транзакции",
                description: "описание_платежа",
                amount: this.amount,
                hash_sum: this.calculateHash(),
                email: this.email,
                redirect_url: "redirect_url",
                success_redirect: "success_url",
                fail_redirect: "fail_url",
                custom_data: {
                    initiator_name: this.initiatorName,
                    collection_name: this.collectionName,
                },
            };
            // Имитация отправки данных
            return Promise.resolve({ success: true });
        },
        calculateHash() {
            // Код для формирования подписи hash_sum
            return "сформированная_подпись";
        }
    }
};
