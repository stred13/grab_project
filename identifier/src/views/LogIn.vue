<template>
  <b-container>
    <b-row align-h="center">
      <b-col
        cols="4"
        class="text-center"
      >
        <h1>Recivers</h1>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      class="mt-2"
    >
      <b-col cols="4">
        <b-card class="p-2 text-left">
          <b-form
            @submit.prevent="onSubmit"
            @reset="onReset"
            v-if="show"
          >
            <b-form-group
              id="exampleInputGroup1"
              label="User name:"
              label-for="exampleInput1"
            >
              <b-form-input
                id="exampleInput1"
                type="text"
                v-model="form.user_name"
                required
                placeholder="Enter user name"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="exampleInputGroup2"
              label="Password:"
              label-for="exampleInput2"
            >
              <b-form-input
                id="exampleInput2"
                type="text"
                v-model="form.pass"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleGroup4">
              <b-form-checkbox-group
                v-model="form.checked"
                id="exampleChecks"
              >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <div class="d-flex justify-content-between">
              <b-button
                type="submit"
                variant="primary"
              >Submit</b-button>
              <b-button
                type="reset"
                variant="danger"
                class="ml-1"
              >Reset</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row></b-row>
  </b-container>
</template>
