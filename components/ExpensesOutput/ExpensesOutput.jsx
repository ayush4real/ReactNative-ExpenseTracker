import {View, FlatList, Text} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-04-20')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 80.00,
        date: new Date('2022-03-17')
    },
    {
        id: 'e3',
        description: 'Wrist watch',
        amount: 22.99,
        date: new Date('2022-04-6')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 14.99,
        date: new Date('2022-04-8')
    },
    {
        id: 'e5',
        description: 'Mouse',
        amount: 6.25,
        date: new Date('2022-04-02')
    }
]

function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput;