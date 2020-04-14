/**
 * Dummy data of transactions
 * @author Daniel Rodriguez
 */
import moment from 'moment';

export default [
    {
        id: '1',
        accountId: '1',
        amount: 12000,
        type: 'purchase',
        date: moment(),
        description: 'bread'
    },
    {
        id: '2',
        accountId: '1',
        amount: 1200,
        type: 'purchase',
        date: moment(),
        description: 'milk'
    },
    {
        id: '3',
        accountId: '2',
        amount: 22000,
        type: 'purchase',
        date: moment(),
        description: 'playstation 4'
    },
    {
        id: '4',
        accountId: '2',
        amount: 120,
        type: 'purchase',
        date: moment(),
        description: 'eggs'
    },
    {
        id: '5',
        accountId: '3',
        amount: 32000,
        type: 'purchase',
        date: moment(),
        description: 'TV'
    },
    {
        id: '6',
        accountId: '3',
        amount: 12000,
        type: 'purchase',
        date: moment(),
        description: 'shopping'
    }
]