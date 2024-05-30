<template>
  <div>
    <!-- Date -->
    <label for="startDateId">Período</label>
    <div class="form-group">
      <div class="row">
        <!-- Início -->
        <div class="col datepicker date input-group">
          <input
            type="text"
            placeholder="Início"
            class="form-control"
            id="startDateId"
            :value="forms.initialDate"
            @focusout="initialDateValue"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="fa fa-calendar"></i>
            </span>
          </div>
        </div>
        <!-- Término -->
        <div class="col datepicker date input-group">
          <input
            type="text"
            placeholder="Término"
            class="form-control"
            id="endDateId"
            :value="forms.finalDate"
            @focusout="endDateValue"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="fa fa-calendar"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forms: {
      type: Object,
      required: true,
    }
  },
  methods: {
    initialDateValue(event) {
      setTimeout(() => {
        this.forms.initialDate = event.target.value;
      }, 100);
    },
    endDateValue(event) {
      setTimeout(() => {
        this.forms.finalDate = event.target.value;
      }, 100);
    }
  }
};
</script>