<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Calculator></Calculator>
    <Form></Form>
  </div>
</template>

<script>
import Header from './components/header/header'
import Main from './components/main/main'
import Calculator from './components/calculator/calculator'
import Form from './components/form/form'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Calculator,
    Form
  }
}
</script>
