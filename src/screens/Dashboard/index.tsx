import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
} from './styles'

export function Dashboard(){
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
          <Icon name='power'/>
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
    </Container>
  )
}