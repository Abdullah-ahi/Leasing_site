<template>
  <section class="calculator">
    <div class="calculator_top">Рассчитайте стоимость автомобиля в лизинг</div>
    <div class="calculations">
      <div class="calculations_car_cost">
        <span class="calculations_car_cost_desc">Стоимость автомобиля</span>
        <div class="calculations_car_cost_value">
          <div class="calculations_car_cost_value_items">
            <span class="calculations_car_cost_value_item">{{convertValue(carCost)}}</span>
            <span class="currency">&#x20bd;</span>
          </div>
          <input v-model="carCost" type="range" name="car_cost" id="car_cost" min="700000" max="5000000" step="1000">
        </div>
      </div>
      <div class="initial_fee">
        <span class="initial_fee_desc">Первоначальный взнос</span>
        <div class="initial_fee_value">
          <div class="initial_fee_value_items">
            <span class="initial_fee_value_item">{{convertValue(initialFee)}}</span>
            <span class="initial_fee_percentage_value">{{percentInitialFee()}}</span>
          </div>
          <input v-model="initialFee" type="range" name="initial_fee" id="initial_fee" min="70000" max="1200000" step="1000">
        </div>
      </div>
      <div class="lease_term">
        <span class="lease_term_desc">Срок лизинга</span>
        <div class="lease_term_value">
          <div class="lease_term_value_items">
            <span class="lease_term_value_item">{{countOfMonth}}</span>
            <span class="moths_count">мес.</span>
          </div>
          <input v-model="countOfMonth" type="range" name="moths_count" id="moths_count" min="1" max="80" step="1">
        </div>
      </div>
    </div>
    <div class="agreement_cost_block">
      <div class="agreement_cost_payment_data">
        <div class="agreement_cost">
          <span class="agreement_cost_desc">Сумма договора лизинга</span>
          <span class="agreement_cost_value">4 467 313 &#x20bd;</span>
        </div>
        <div class="monthly_payment">
          <span class="monthly_payment_desc">Ежемесячный платеж от</span>
          <span class="monthly_payment_value">114 455 &#x20bd;</span>
        </div>
      </div>
      <a @click="openForm" href="#" class="calculations_request_button">Оставить заявку</a>
    </div>
  </section>
</template>

<script>
import './calculator.css'
export default {
  data: () => ({
    carCost: 3300000,
    initialFee: 420000,
    countOfMonth: 60
  }),
  methods: {
    openForm (e) {
      this.$root.openForm(e)
    },
    convertValue (cost) {
      // eslint-disable-next-line
      return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    },
    percentInitialFee () {
      return `${Math.ceil((this.initialFee / this.carCost) * 100)}%`
    }
  },
  mounted () {}
}
</script>
