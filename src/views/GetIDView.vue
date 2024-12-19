<script>
import { onMounted } from 'vue';

export default {
  name: 'Datepicker',
  setup() {
    onMounted(() => {
      const input = document.getElementById('datepicker-autohide');
      if (input) {
        new Datepicker(input, { autohide: true });
      }
    });
  },

  data() {
        return{
            firstForm: true,
            secondForm: false,
            thirdForm: false,
            activeOne: true,
            activeTwo: false,
            activeThree: false,
            studentForm: true,
            employeeForm: false,
            activeToggleOpt: 'student',
            transactionType: 'new',
            staffType: 'teaching',
        }
    },
    methods: {
        backToFirstPage() {
            this.firstForm = true
            this.secondForm = false
            this.activeTwo = false
        },
        toSecondPage() {
            this.firstForm = false
            this.secondForm = true
            this.activeTwo = true
        },
        backToSecondPage() {
            this.secondForm = true
            this.thirdForm = false
            this.activeThree = false
        },
        toThirdPage() {
            this.secondForm = false
            this.thirdForm = true
            this.activeThree = true
        },
        formChange() {

        },
        setActive(option) {
            this.activeToggleOpt = option;
            if (option == 'student') {
                this.studentForm = true
                this.employeeForm = false
            } else {
                this.employeeForm = true
                this.studentForm = false
            }
        }
    }
};
</script>

<template>
    <div class="flex w-full justify-center mt-4"> <!--Toggle between student and employee form-->
        <div class="flex md:basis-1/6 xsm:basis-1/2 bg-hovColText rounded-full py-2 px-2">
            <div class="active:bg-actColBut hover:cursor-pointer basis-1/2 justify-items-center rounded-full py-2 shadow transition-colors duration-200" :class="{
                'bg-main text-white': activeToggleOpt === 'student',
                'bg-none text-white': activeToggleOpt !== 'student',}"
                @click="setActive('student')" > <!--Toggle Option: Student-->
                <h1 class="font-bold text-white">Student</h1>
            </div>
            <div class="active:bg-actColBut hover:cursor-pointer basis-1/2 justify-items-center rounded-full py-2 shadow transition-colors duration-200"
            :class="{
                'bg-main text-white': activeToggleOpt === 'employee',
                'bg-none text-white': activeToggleOpt !== 'employee',}"
                @click="setActive('employee')" > <!--Toggle Option: Employee-->
                <h1 class="font-bold text-white">Employee</h1>
            </div>
        </div>
    </div> <!--Toggle end between student and employee form-->

    <div class="flex w-full justify-center mt-4"> <!--Radio button (options: new, replacement & lost)-->
            <div class="flex items-center me-4">
                <input checked id="new" type="radio" value="new" v-model="transactionType" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="new" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New</label>
            </div>
            <div class="flex items-center me-4">
                <input id="replacement" type="radio" value="replacement" v-model="transactionType" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="replacement" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Replacement</label>
            </div>
            <div class="flex items-center me-4">
                <input id="lost" type="radio" value="lost" v-model="transactionType" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="lost" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lost</label>
            </div>
    </div> <!--Radio button end (options: new, replacement & lost)-->

    <div class="flex md:flex-row flex-col"> 
        <div class="md:w-1/4 items-center flex flex-col justify-start justify-items-center"> <!--Container for form basic info and stepper-->
            <div class="justify-items-center md:py-5 py-3"> <!--Form basic information-->
                <h1 class="font-bold text-3xl">{{ activeToggleOpt.charAt(0).toUpperCase() + activeToggleOpt.slice(1) }} Form</h1>
                <p class="text-sm">WMSU-UPRESS-FR-003.00</p>
                <p class="text-sm">Effective Date: 01-Mar-2017</p>
            </div>

            <div class="flex md:flex-col xsm:flex-row w-full md:justify-start"> <!--Container for the stepper-->
                <div class="flex basis-1/3 md:items-center xsm:items-start justify-center">
                    <div class="flex md:flex-row xsm:flex-col md:basis-3/4 xsm:w-full items-center">
                        <div v-bind:style=" {backgroundColor: activeOne ? 'green':'gray'} " class="font-bold text-white flex items-center justify-center w-10 h-10 rounded-full md:mr-4 xsm:m-0">
                        1
                        </div>
                        <div class="items-center md:justify-items-start xsm:m-0" v-bind:style=" {color: activeOne ? 'green' : 'gray'} ">
                            <p class="font-bold md:text-left text-center">Personal information</p>
                            <p class="text-sm md:block xsm:hidden md:text-left text-center">Provide personal and <br/> professional details</p>
                        </div>
                    </div>
                </div>
                <div class="basis-1/3 md:items-center xsm:items-start justify-center md:flex xsm:hidden">
                    <div class="flex md:flex-row xsm:flex-col md:basis-3/4 xsm:w-full items-center">
                        <div class="font-bold text-white flex items-center justify-center w-10 h-10 md:mr-4 xsm:m-0">
                            <div class="w-11 h-11 outline">
                                <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2 V38" v-bind:style="{ fill:'none', stroke: activeTwo ? 'green':'gray', 'stroke-width':3, 'stroke-linecap':'round', }"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex basis-1/3 md:items-center xsm:items-start justify-center">
                    <div class="flex md:flex-row xsm:flex-col md:basis-3/4 xsm:w-full items-center">
                        <div v-bind:style=" {backgroundColor: activeTwo ? 'green':'gray'} " class="font-bold text-white flex items-center justify-center w-10 h-10 rounded-full md:mr-4 xsm:m-0">
                        2
                        </div>
                        <div class="items-center md:justify-items-start xsm:m-0" v-bind:style=" {color: activeTwo ? 'green' : 'gray'} ">
                            <p class="font-bold md:text-left text-center">Emergency contact</p>
                            <p class="text-sm md:block xsm:hidden md:text-left text-center">Provide details of one <br/> emergency contact person</p>
                        </div>
                    </div>
                </div>
                <div class="basis-1/3 md:items-center xsm:items-start justify-center md:flex xsm:hidden">
                    <div class="flex md:flex-row xsm:flex-col md:basis-3/4 xsm:w-full items-center">
                        <div class="font-bold text-white flex items-center justify-center w-10 h-10 md:mr-4 xsm:m-0">
                            <div class="w-11 h-11 outline">
                                <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2 V38" v-bind:style="{ fill:'none', stroke: activeThree ? 'green':'gray', 'stroke-width':3, 'stroke-linecap':'round', }"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex basis-1/3 md:items-center xsm:items-start justify-center">
                    <div class="flex md:flex-row xsm:flex-col md:basis-3/4 xsm:w-full items-center">
                        <div v-bind:style=" {backgroundColor: activeThree ? 'green':'gray'} " class="font-bold text-white flex items-center justify-center w-10 h-10 rounded-full md:mr-4 xsm:m-0">
                        3
                        </div>
                        <div class="items-center md:justify-items-start xsm:m-0" v-bind:style=" {color: activeThree ? 'green' : 'gray'} ">
                            <p class="font-bold md:text-left text-center">Attachments</p>
                            <p class="text-sm md:block xsm:hidden md:text-left text-center">Provide the following <br/> attachments</p>
                        </div>
                    </div>
                </div>
            </div> <!--Container end for the stepper-->
        </div>
        <div class="md:w-3/4 md:shadow-2xl rounded-3xl w-full xsm:shadow-none md:my-10 md:mr-10"> <!--Container for all forms-->

            <form class="p-5" v-show="firstForm && studentForm"> <!-- Start of Student Form (Personal Info) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Student Information</h1>
                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="basis-4/12 mb-3">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan" required />
                    </div>
                    <div class="basis-4/12 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tomas" required />
                    </div>
                    <div class="basis-3/12 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dela Cruz" required />
                    </div>
                    <div class="mb-3 1/12">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">N/A</option>
                            <option value="Jr.">Jr.</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="DE">VI</option>
                        </select>
                    </div>
                </div>
                <div class="gri mb-6 md:grid-cols-1">
                    <div class="mb-3">
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>  
                    <div class="mb-3">
                        <label for="studentID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student No.</label>
                        <input type="tel" id="studentID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx-xxxxx" pattern="[0-9]{4}-[0-9]{5}" required />
                    </div>
                    <div class="mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College program</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a program</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button @click.prevent="toSecondPage" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                </div>
            </form> <!-- End of Student Form (Personal Info) -->

            <form class="p-5" v-show="secondForm && studentForm"> <!-- Start of Student Form (Emergency Info) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Emergency Contact Information</h1>
                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="basis-1/3 mb-3">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan" required />
                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tomas" required />
                    </div>
                    <div class="basis-1/4 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dela Cruz" required />
                    </div>
                    <div class="mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">N/A</option>
                            <option value="Jr.">Jr.</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="DE">VI</option>
                        </select>
                    </div>
                </div>
                <div class="gri mb-6 md:grid-cols-1">
                    <div class="mb-3">
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>  
                    <div class="mb-3">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact no.</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx-xxx-xxxx" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                </div>
                <div class="flex justify-center">
                    <button @click.prevent="backToFirstPage" class="text-secondary bg-secOpt mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                    <button @click.prevent="toThirdPage" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                </div>
            </form> <!-- End of Student Form (Emergency Info) -->

            <form class="p-5" v-show="thirdForm && studentForm"> <!-- Start of Student Form (Attachments) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Attachments</h1>
                <div class="mb-3"> <!--Photo Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Photo</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">320px by 378px, 300 DPI (Must not exceed 250kb).</p>
                </div>

                <div class="mb-3"> <!--Signature Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Signature</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">430px by 140px, 300 DPI (Must not exceed 40kb).</p>
                </div>

                <div class="mb-3"> <!--COR Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Certificate of Registration</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="mb-3" v-if="transactionType == 'replacement'"> <!--OLD ID - FRONT Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Front of Old ID</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="mb-3" v-if="transactionType == 'replacement'"> <!--OLD ID - BACK Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Back of Old ID</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="mb-3" v-if="transactionType == 'lost'"> <!--AFFIDAVIT OF LOSS Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Affidavit of Loss</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="mb-3" v-if="transactionType == 'lost'"> <!--DSA FORM Attachment-->
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">DSA Form</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="flex mb-6 justify-center">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>

                <div class="flex justify-center">
                    <button @click.prevent="backToSecondPage" class="text-secondary bg-secOpt mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                    <button type="submit" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>

            </form> <!-- End of Student Form (Attachments) -->

            <form class="p-5" v-show="firstForm && employeeForm"> <!-- Start of Employee Form (Personal Info) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Employee Information</h1>
                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="basis-1/3 mb-3">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan" required />
                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tomas" required />
                    </div>
                    <div class="basis-1/4 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dela Cruz" required />
                    </div>
                    <div class="mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">N/A</option>
                            <option value="Jr.">Jr.</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="DE">VI</option>
                        </select>
                    </div>
                </div>
                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="mb-3 md:basis-1/3"><!--Radio button for staff type-->
                        <p class="text-sm font-medium mb-2">Staff type</p> <!--Label for the staff type radio buttons-->
                        <div class="justify-center flex flex-row bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            
                            <div class="flex items-center mx-6">
                                <input checked id="default-radio-1" type="radio" value="teaching" v-model="staffType" name="default-radio" class="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teaching</label>
                            </div>
                            <div class="flex items-center mx-6">
                                <input id="default-radio-2" type="radio" value="non-teaching" v-model="staffType" name="default-radio" class="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-Teaching</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 md:basis-1/3" v-if="staffType == 'teaching'"> <!--Academic Rank-->
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Academic rank</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose an academic rank</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div class="mb-3 md:basis-1/3" v-if="staffType == 'non-teaching'"> <!--Plantilla Position-->
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plantilla Position</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a plantilla position</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit/Office/College/Dept.</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="College of Computing Studies" required />
                    </div>
                </div>

                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="mb-3 basis-1/3">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID number</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx-xxxxx" pattern="[0-9]{4}-[0-9]{5}" required />
                    </div>
                    <div class="mb-3 basis-1/3">
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street/City/" required />
                    </div>  
                    <div class="mb-3 basis-1/3">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact no.</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx-xxx-xxxx" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                </div>

                <div class="md:flex md:flex-row md:space-x-2 mb-3">                        
                    <div class="basis-1/3 mb-3">
                        <p class="text-sm font-medium mb-2">Date of birth</p>
                        
                        <div class="relative max-w-sm">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input
                            id="datepicker-autohide"
                            type="text"
                            data-datepicker
                            data-datepicker-autohide
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date"/>
                        </div>

                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Civil status</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose your civil status</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood type</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose your blood type</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button @click.prevent="toSecondPage" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                </div>
            </form> <!-- End of Employee Form (Personal Info) -->

            <form class="p-5" v-show="secondForm && employeeForm"> <!-- Start of Employee Form (Emergency Info) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Emergency Contact Information</h1>
                <div class="md:flex md:flex-row md:space-x-2">
                    <div class="basis-1/3 mb-3">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan" required />
                    </div>
                    <div class="basis-1/3 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tomas" required />
                    </div>
                    <div class="basis-1/4 mb-3">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dela Cruz" required />
                    </div>
                    <div class="mb-3">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">N/A</option>
                            <option value="Jr.">Jr.</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="DE">VI</option>
                        </select>
                    </div>
                </div>
                <div class="gri mb-6 md:grid-cols-1">
                    <div class="mb-3">
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>  
                    <div class="mb-3">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact no.</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx-xxx-xxxx" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                </div>
                <div class="flex justify-center">
                    <button @click.prevent="backToFirstPage" class="text-secondary bg-secOpt mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                    <button @click.prevent="toThirdPage" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                </div>
            </form> <!-- End of Employee Form (Emergency Info) -->

            <form class="p-5" v-show="thirdForm && employeeForm"> <!-- Start of Employee Form (Attachments) -->
                <h1 class="text-center font-bold text-2xl md:block hidden mb-4">Attachments</h1>
                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Photo</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">320px by 378px, 300 DPI (Must not exceed 250kb).</p>
                </div>

                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Signature</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">430px by 140px, 300 DPI (Must not exceed 40kb).</p>
                </div>

                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">HRMO Form</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="mb-3" v-if="transactionType == 'lost'">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Affidavit of Loss</label>
                    <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>

                <div class="flex mb-6 justify-center">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>

                <div class="flex justify-center">
                    <button @click="backToSecondPage" class="text-secondary bg-secOpt mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
                    <button type="submit" class="text-secondary bg-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>

            </form> <!-- End of Employee Form (Attachments) -->
        </div>
    </div>
</template>