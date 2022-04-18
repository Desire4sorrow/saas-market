import BodyPage from './components/BodyPage.vue'
import PaymentMethod from './components/HandlingTariff/PaymentMethod.vue'
import PaymentDetails from './components/HandlingTariff/PaymentDetails.vue'
import PaymentWorkspace from "@/components/HandlingTariff/PaymentWorkspace"
import PersonalAccount from "@/components/PersonalAccount/PersonalAccount.vue"
import PersonalProfile from "@/components/PersonalAccount/PersonalProfile";
import PersonalMethod from "@/components/PersonalAccount/PersonalMethod";

export const routes = [
    {
        path: '/account',
        name: 'BodyPage',
        component: BodyPage,
        meta: {
            title: 'Личный кабинет'
        }
    },
    {
        path: '/account/method',
        name: 'PaymentMethod',
        component: PaymentMethod,
        meta: {
            title: 'Выберите способ оплаты'
        }
    },
    {
        path: '/account/details',
        name: 'PaymentDetails',
        component: PaymentDetails,
        props: true,
        meta: {
            title: 'Реквизиты для оплаты'
        }
    },
    {
        path: '/account/workspace',
        name: 'PaymentWorkspace',
        component: PaymentWorkspace,
        props: true,
        meta: {
            title: 'Создание пространства'
        }
    },
    {
        path: '/account/cabinet',
        name: 'PersonalAccount',
        component: PersonalAccount,
        props: true,
        meta: {
            title: 'Профиль'
        },
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: PersonalProfile,
                meta: {
                    title: 'Профиль'
                }
            },
            {
                path: 'method',
                name: 'Method',
                component: PersonalMethod,
                meta: {
                    title: 'Способы оплаты'
                }
            }
        ]
    },
]