import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  LogoutButton,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 4.000,00',
      category: {name: 'Vendas', icon: 'dollar-sign'},
      date: '12/09/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 4.000,00',
      category: {name: 'Aluguel', icon: 'coffee'},
      date: '19/09/2022'
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/39964271?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Júlia</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name='power'/>
          </LogoutButton>
        </UserWrapper>  
      </Header>
      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entrada'
          amount='R$14.000,00'
          lastTransaction='13 de abril'
        />
        <HighlightCard 
          type='down'
          title='Saidas'
          amount='R$4.000,00'
          lastTransaction='14 de abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$14.000,00'
          lastTransaction='16 de abril'
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />  
      </Transactions>      
    </Container>
  )
}