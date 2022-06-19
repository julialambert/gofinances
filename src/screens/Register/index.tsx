import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles'

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
});

export function Register(){
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  function handleRegister(form : FormData){
    if(!transactionType)
      return Alert.alert('Selecione o tipo da transação');

    if(category.key === 'category')
      return Alert.alert('Selecione a categoria');
    
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm 
              autoCapitalize='sentences'
              autoCorrect={false}
              name='name'
              control={control}
              placeholder='Nome'
              error={errors.name && errors.name.message}
            />
            <InputForm 
              keyboardType='numeric'
              name='amount'
              control={control}
              placeholder='Preço'
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton 
                type='up'
                title='Income'
                onPress={() => handleTransactionsTypesSelect('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton 
                type='down'
                title='Outcome'
                onPress={() => handleTransactionsTypesSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionsTypes>  
            <CategorySelectButton 
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />     
          </Fields>
          <Button 
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}