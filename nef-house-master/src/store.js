import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // Local Variables
    state: {
        character: null,
        answers: {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null,
        },
        questions: [{
            category: "Flow Low",
            question: "When you save water, you also save energy.",
            type: "choice",
            answers: [
                "True",
                "False"
            ],
            correctAnswerIndex: "0",
            result: "Using less water also saves the energy used to clean, transport and heat the water.",
            trueFalse: true
        },{
            category: "Flow Low",
            question: "The sister uses a high-efficiency shower head and her 5-minute shower timer to save 2.5 gallons of water each day. How much water would she save in one year (365 days) of daily showers?",
            type: "choice",
            answers: [
                "100 gallons",
                "564 gallons",
                "912.5 gallons",
                "682.5 gallons"
            ],
            correctAnswerIndex: "2",
            result: "The right answer is 912.5 gallons of water saved&mdash;plus the energy used to clean, transport and heat that water!",
            trueFalse: false
        },{
            category: "Keep It Clean",
            question: "Three facts and an untruth ...Which is the not true?",
            type: "choice",
            answers: [
                "A dirty filter can cause an appliance not to work as well.",
                "Keeping heating and cooling system air filters clean helps the air in your home to be cleaner.",
                "A dirty filter causes an appliance to use less energy.",
                "Furnaces, boilers, clothes dryers, air conditioners and vehicles have filters."
            ],
            correctAnswerIndex: "2",
            result: "The third statement about energy use is not true. A clogged, dirty filter causes an appliance to use more energy to do the same amount of work.",
            trueFalse: false
        },{
            category: "Keep It Clean",
            question: "An adult installed a filter whistle in this home’s furnace filter. It just made a whistling noise to let them know the filter is dirty. The mom is now changing the filter in the basement. What color is the filter whistle?",
            type: "choice",
            answers: [
                "White",
                "Red",
                "Blue/Green",
                "Pink"
            ],
            correctAnswerIndex: "2",
            result: "A filter whistle could be any color but this one is BLUE-GREEN. – Filter whistles are two-piece objects that are pushed through the filter until they click in the middle.",
            trueFalse: false
        },{
            category: "Seal It Up",
            question: "The water heater in this home’s basement is nicely wrapped to keep water hot! Notice the blanket around it. One of its pipes is also insulated. What color is that pipe’s insulating wrap?",
            type: "choice",
            answers: [
                "Orange",
                "Green",
                "Purple",
                "Black"
            ],
            correctAnswerIndex: "3",
            result: "Pipe insulation could be any color, but this piece is BLACK. -  Your family can reduce heat loss and save energy by insulating the hot water pipe from the water heater.",
            trueFalse: false
        },{
            category: "Seal It Up",
            question: "This family doesn’t want a hole in their house! Even the tiniest opening can cause air to leak in or out, making the temperature less comfortable. Which of these places in a home can have small openings that need to be sealed?",
            type: "choice",
            answers: [
                "Doors",
                "Windows",
                "Places where a pipe or wire exits the house",
                "Skylights",
                "All of the above"
            ],
            correctAnswerIndex: "4",
            result: "All of the above - Caulk, weather stripping or insulation can seal up openings around these areas.",
            trueFalse: false
        },{
            category: "Keep It Clean",
            question: "Routine cleaning and inspection of heating and <span style='text-decoration:underline;'>oloicng</span> systems by a qualified technician helps them work better and use less energy.",
            type: "limit",
            answers: [
                "cooling"
            ],
            correctAnswerIndex: "0",
            result: "Cooling – Technicians tighten electrical connections, lubricate moving parts and check and clean system components.",
            maxLength: 7
        },{
            category: "Turn It Off",
            question: 'Look in the office to solve this riddle: "Along with the light bulb, I was turned off to be dark. The exiting brother left his wise energy use mark. What am I?"',
            type: "limit",
            answers: [
                "computer"
            ],
            correctAnswerIndex: "0",
            result: "Computer– Computers should be turned off. Remember that screen savers use energy too! An advanced power strip will turn off your computer monitor, printer and speakers when the computer is shut down.",
            maxLength: 8
        },{
            category: "Seal It Up",
            question: 'Look in the attic and living room to solve this riddle: "I can be a roll, a sheet or loose bits of fluff. I help use less energy to heat and cool – good stuff! What am I?"',
            type: "limit",
            answers: [
                "insulation"
            ],
            correctAnswerIndex: "0",
            result: "Insulation – A building is more comfortable and uses less energy to heat and cool with insulation in its attic, exterior walls and basement.",
            maxLength: 10
        }
        ,{
            category: "Get Set",
            question: "This family’s water heater is set properly to 120 F. If it were 20 degrees higher, energy to power the water heater could cost around $420 more per year. How much extra money would that cost each month?",
            type: "number",
            answers: [
                "35"
            ],
            correctAnswerIndex: "0",
            result: "A $420 yearly savings equals $35 each month. If you have a suppressed immune system or chronic respiratory disease, you may consider keeping your hot water tank at 140<sup>&deg;</sup> F."
        },{
            category: "Get Set",
            question: 'Look at the bedroom in the house to solve this riddle: "I have no cover when you want free light. Cover me up when the temperature outside isn\'t right. What am I?"',
            type: "limit",
            answers: [
                "window"
            ],
            correctAnswerIndex: "0",
            result: "The answer to the quiz is 'Window' – Window coverings like blinds keep light, heat or cold in or out, depending on your needs.",
            maxLength: 6,
        },{
            category: "Light it Right",
            question: "This home uses only LED bulbs! How many LED bulbs are in the family room with the dad, baby and brother?",
            type: "choice",
            answers: [
                "7",
                "6",
                "5",
                "4"
            ],
            correctAnswerIndex: "0",
            result: "7 – LED bulbs can be used almost anywhere: in recessed lighting, table lamps, ceiling fixtures, porch or holiday lights and with dimmable switches.",
            trueFalse: false
        },{
            category: "Turn It Off",
            question: "Different types of advanced power strips all have the same job of shutting off power to items that are not in use.",
            type: "choice",
            answers: [
                "True",
                "False"
            ],
            correctAnswerIndex: "0",
            result: "True – All advanced power strips turn things off to avoid wasted power. They work on pre-set schedules, with motion sensors or remote controls or have connected outlets with different functions.",
            trueFalse: true
        },{
            category: "Turn It Off",
            question: "Three facts and an untruth ...Which is the not true?",
            type: "choice",
            answers: [
                "A phantom load is a device that uses power even when it is turned off.",
                "Electronics with remote controls, clocks or indicator lights are phantom loads.",
                "A charger will continue to use electricity after it has fully charged a battery.",
                "There is nothing we can do to reduce phantom load."
            ],
            correctAnswerIndex: "3",
            result: "The fourth statement is not true. Unplugging electronics or using an advanced power strip will reduce phantom load.",
            trueFalse: false
        },{
            category: "Flow Low",
            question: "Unscramble the following word: Faucets, <span style='text-decoration:underline;'>ostitle</span>, showers, clothes washers and leaks are all big users of water in a home.",
            type: "limit",
            answers: [
                "toilets"
            ],
            correctAnswerIndex: "0",
            result: "The answer is Toilets – they are the biggest user of water in an average home. Older, inefficient toilets can use as much as 6 gallons per flush.",
            maxLength: 7
        },{
            category: "Light it Right",
            question: "An LED bulb lasts about 25 times longer than an inefficient bulb. If an inefficient bulb in your kitchen needed to be replaced one time per year, about how often would an LED last in its spot?",
            type: "choice",
            answers: [
                "Every 10 years",
                "Every 5 years",
                "Every 18 years",
                "Every 25 years"
            ],
            correctAnswerIndex: "3",
            result: "Every 25 years",
            trueFalse: false
        },{
            category: "Wash it Well",
            question: "Washing clothes in cold water saves water.",
            type: "choice",
            answers: [
                "True",
                "False"
            ],
            correctAnswerIndex: "1",
            result: "False – washing clothes in cold water doesn't save water, but it <em>does</em> use less energy to heat the water.",
            trueFalse: true
        },{
            category: "Wash it Well",
            question: "Which of these statements is not true?",
            type: "choice",
            answers: [
                "Using water-efficient shower heads and faucet aerators saves water.",
                "Taking showers instead of baths saves water.",
                "Running a dishwasher that is half full saves water.",
                "Using a clothesline or rack to dry clothing saves energy.",
            ],
            correctAnswerIndex: "2",
            result: "The dishwasher statement is not true. Unless your dishwasher has load sensing technology, it uses the same amount of water and energy regardless of how fully loaded it is. Also, avoid the heat dry setting that uses extra energy to dry dishes. Air drying is much better.",
            trueFalse: false
        },{
            category: "Wash it Well",
            question: 'Look in a bathroom to solve this riddle: "While I go back and forth to polish incisors. The water is off because my handler is wiser. What am I?",',
            type: "limit",
            answers: [
                "toothbrush"
            ],
            correctAnswerIndex: "0",
            result: "Toothbrush – Even with a water efficient aerator on your faucet, leaving water on when it is not needed&mdash;like while you're brushing your teeth&mdash;is wasteful.",
            maxLength: 10
        },{
            category: "Get Set",
            question: 'Unscramble the following word: Adjusting your <span style="text-decoration:underline;">tosemrhatt</span> up in the summer and down in the winter will save energy used to heat and cool your home.',
            type: "limit",
            answers: [
                "thermostat"
            ],
            correctAnswerIndex: "0",
            result: "Thermostat – A national setting of 68 F in the winter (lower when asleep or away from home) and 78 F in the summer (when you are at home and need cooling) is recommended.",
            maxLength: 10
        },{
            category: "Get Set",
            question: "This family knows their numbers!  The refrigerator and freezer settings are just low enough to store food properly without wasting energy. An adult set the refrigerator between 37  and 40 F and the freezer at:",
            type: "choice",
            answers: [
                "0 F",
                "-10 F",
                "-5 F",
                "35 F"
            ],
            correctAnswerIndex: "0",
            result: "0 F – Even with proper settings, keeping the refrigerator or freezer door open wastes energy. Choose between ice cream and leftover spaghetti before opening the door!",
            trueFalse: false
        },{
            category: "Be Smart",
            question: "We are beginning to use technology to make the electrical grid smarter.  It will improve communication between those who help provide electricity and those who use it.",
            type: "choice",
            answers: [
                "True",
                "False"
            ],
            correctAnswerIndex: "0",
            result: "True – The smart grid will even let our electrical devices be part of this communication. When parts of the grid communicate, problems like a damaged power line can be identified and responded to more quickly.",
            trueFalse: true
        },{
            category: "Be Smart",
            question: "Three facts and an untruth … which of these is not true?",
            type: "choice",
            answers: [
                "One o’clock in the afternoon is usually the time when electricity is needed most.",
                "There is different demand for electricity at different times of the day and year.",
                "The smart grid will help supply electricity when it is in demand.",
                "The smart grid will help people learn about their energy use."
            ],
            correctAnswerIndex: "0",
            result: "The one o’clock statement is not true. The need for electricity is usually highest in the early evening.",
            trueFalse: false
        },{
            category: "Be Smart",
            question: "Unscramble the following word: In the future, more homes will have a <span style='text-decoration:underline;'>mtsar</span> meter that can show families near hourly information on their electrical use.",
            type: "limit",
            answers: [
                "smart"
            ],
            correctAnswerIndex: "0",
            result: "Smart – Smart meters often come with a web portal where customers can see details about how they use energy. The information can be used to make better energy decisions about energy use.",
            maxLength: 5
        },{
            category: "Energy Efficiency",
            question: "Renewable energy resources like sun, water, wind and biomass can be naturally replaced. Energy resources like natural gas, coal, oil and uranium are replaced very slowly or are not replaced at all. Which item pictured outside this home generates electricity with a renewable resource?",
            type: "choice",
            answers: [
                "A solar panel",
                "A coal-fired power plant",
                "A hydroelectric dam",
                "A wind turbine"
            ],
            correctAnswerIndex: "3",
            result: "A wind turbine – Solar panels and hydroelectric dams also use renewable resources to generate electricity but they aren’t pictured by the home. A coal-fired power plant uses coal, a nonrenewable resource, to generate electricity.",
            trueFalse: false
        },{
            category: "Energy Efficiency",
            question: "To save the most energy, we should: ",
            type: "choice",
            answers: [
                "Be energy efficient by using efficient technologies like low flow water devices or LED bulbs.",
                "Use wise energy behaviors, like taking a short shower or turning off the lights.",
                "Be both energy efficient and use wise energy behaviors."                
            ],
            correctAnswerIndex: "2",
            result: "Both energy efficiency and wise energy behaviors are needed to save the most energy.",
            trueFalse: false
        },{
            category: "Energy Efficiency",
            question: "Three facts and an untruth ...which of these is not true?",
            type: "choice",
            answers: [
                "Saving energy can save money",
                "Saving energy makes the best use of natural resources",
                "We can save energy while enjoying the same comfort and convenience that energy provides.",
                "Reducing, reusing and recycling are great, but they don’t save energy",                
            ],
            correctAnswerIndex: "3",
            result: "The 3 Rs statement is not true. Reducing, reusing, and recycling do save energy.",
            trueFalse: false
        }
        ],
        randomQuestions: [{}],
        tooltips: [{
            category: "Keep It Clean",
            appliance: "air-conditioner",
            room: "outside",
            image: null,
            text: "Jake calls qualified technicians to check the family's heating and cooling systems at the same time each year. That is why they run efficiently and last longer. When the air conditioner or furnace needs to be replaced, the family looks for ENERGY STAR<sup>&reg;</sup> certified equipment to save energy and money on utility bills.",
            num: 1,
            position: "far left",
        },{
            category: "Turn It Off",
            appliance: "lights",
            room: "study",
            image: null,
            text: "Brother is turning off the lights as he leaves the office. Good plan!",
            num: 1,
        },{
            category: "Turn It Off",
            appliance: "devices",
            room: "study",
            image: "study-devices.svg",
            imageStyle: "small", 
            text: "Phantom loads sound scary … and they are, because they waste energy! A phantom load is a device that uses power even when it is turned off. Chargers, items with remote controls and electronics with clocks or indicator lights are phantom loads. There are different types of advanced power strips. They all have the same job of shutting off power to items that are not in use. The power strip you see here turns off the computer monitor, printer and speakers when the main computer is shut down.",
            num: 1,
        },{
            category: "Wash It Well",
            appliance: "dishwasher",
            room: "kitchen",
            image: null,
            text: "The family washes only full loads in the dishwasher to make the best use of water and energy. They also use air dry and energy saver settings.",
            num: 1,
        },{
            category: "Be Smart",
            appliance: "washer-dryer",
            room: "basement",
            image: "basement-washer-dryer.svg",
            imageStyle: "small",
            text: "Smart thermostats, refrigerators, dish washers, air conditioners and electric switches are now available. Jane has set her smart washer and dryer to reduce demand on the grid by responding to signals that help them avoid power use during times when electricity use is high. ",
            num: 1,
            position: "far bottom",
        },{
            category: "Get Set",
            appliance: "furnace",
            room: "basement",
            image: "basement-furnace.svg",
            imageStyle: "small",
            text: "Jane has set the water heater to 120 F. That’s hot enough to shower and wash comfortably without wasting energy used for heating water.",
            num: 1,
            position: "far bottom"
        },{
            category: "Keep It Clean",
            appliance: "dryer",
            room: "basement",
            image: null,
            text: "Clothes dryers have a filter that should be cleaned with every load of laundry. This keeps dirt from building up inside the system, making it safer and last longer.",
            num: 1,
        },{
            category: "Keep It Clean",
            appliance: "air-heating-system",
            room: "basement",
            //image: "furnace-filter.svg",
            image:null,
            imageStyle: "small",
            text: "Changing filters on furnaces, central air and heating systems is very important. A unit will work much harder, and use more energy, to push air through a dirty filter. Furnace filters should be changed every 1 to 3 months, depending on the type of filter and how much the system is used. The small, round, blue-green thing you see on this filter is a furnace filter alarm. It makes noise when the filter is dirty to remind Jane to change it.",
            num: 1,
            position: "far bottom",
        },{
            category: "Be Smart",
            appliance: "smart-meter",
            room: "outside",
            image: "roller-coaster-graph.svg",
            text: "Today, about half of all U.S. electricity customers have smart meters. This is the family’s smart meter. It comes with a web portal that shows near hourly information on their electricity use. It can also be used with their home energy management systems (EMS) to track overall energy use or use by an individual appliance. The family uses their energy knowledge to avoid electricity use when it is in demand. The need for electricity is usually highest in the early evening for homes. ",
            num: 1,
            position: "far right",
        },{
            category: "Light It Right",
            appliance: "window",
            room: "bedroom",
            image: null,
            text: "Sometimes brother uses natural light from outside instead of flipping the light switch.",
            num: 1,
        },{
            category: "Light It Right",
            appliance: "lights",
            room: "tv-room",
            text: "Light emitting diodes (LEDs) are efficient technologies. They use at least 75 percent less energy than incandescent bulbs. Because they last up to 25 times longer, the family can replace them much less often. LED bulbs can be used in dimmable switches, recessed lighting, ceiling fixtures and porch and holiday lights.",
            image: "lighting-facts.svg",
            num: 1,
        },{
            category: "Light It Right",
            appliance: "lights",
            room: "basement",
            image: null,
            text: "This LED nightlight is very energy efficient! It uses only a few cents of electricity per year and helps dad not be afraid of the dark.",
            num: 1,
        },{
            category: "Get Set",
            appliance: "refrigerator",
            room: "kitchen",
            image: null,
            text: "Setting the refrigerator between 37  and 40 F and the freezer to 0 F makes the best use of energy. Lower settings waste energy and make baby’s ice cream way too hard!",
            num: 1,
        },{
            category: "Get Set",
            appliance: "thermostat",
            image: "living-room1.svg,living-room2.svg",
            imageStyle: "small",
            room: "living-room",     //************************
            text: "Grandpa has set the thermostat correctly. Adjusting the thermostat up in the summer and down in the winter saves energy used to heat and cool this home. A national setting of 68 F in the winter (lower when asleep or away from home) and 78 F in the summer (when you are at home and need cooling) is recommended. A programmable thermostat makes this easy and also allows you to preset different schedules for times when less heating or cooling is needed. For example, this family programs less summer cooling when they are away at school and work, sleeping or on vacation.",               //FIX THIS
            num: 1,                     //************************
        },{
            category: "Be Smart",
            appliance: "smart-app",
            room: "living-room",
            image: null,
            text: "This high-tech family uses smart technology to turn electronics off with their voices or put them on a schedule to turn on only when needed.",
            num: 1,
        },{
            category: "Turn It Off",
            appliance: "television",
            room: "tv-room",
            image: null,
            text: "Save electricity by using it only when needed. Baby’s favorite show is not on, so neither is the TV!",
            num: 1,
        },{
            category: "Wash It Well",
            appliance: "washer",
            room: "basement",
            image: null,
            text: "It’s a win - win to wash full loads of laundry with cold water. Less energy is used to heat the water and more clothes get washed!",
            num: 1,
        },{
            category: "Be Smart",
            appliance: "smart-outlet",
            room: "tv-room",
            image: null,
            text: "This smart outlet lets sister turn the lamp off with her phone.",
            num: 1,
            position: "far left",
        },{
            category: "Seal It Up",
            appliance: "ceiling",
            room: "bedroom",
            image: "attic-insulation.svg",
            text: "Think of the exterior of a home as a giant barrier that protects the inside from outside heat or cold. This family has added insulation to their attic, exterior walls and basement to keep this barrier strong. As a result, the temperature of their house is kept comfortable with less energy use. ",
            num: 1,
        },
        {
            category: "Seal It Up",
            appliance: "wall",
            room: "living-room",
            image: null,
            text: "Think of the exterior of a home as a giant barrier that protects the inside from outside heat or cold. This family has added insulation to their attic, exterior walls and basement to keep this barrier strong. As a result, the temperature of their house is kept comfortable with less energy use. ",
            num: 1,
            position: "far left",
        },
        {
            category: "Seal It Up",
            appliance: "door",
            room: "living-room",
            image: null,
            text: "Air can leak in or out of openings where doors, windows, pipes or wires exit the home. Grandpa sealed these leaks with caulk, weather stripping and expanding foam insulation. Now the heated or cooled air stays inside and outside air stays outside. The house is the right temperature with less energy use.",
            num: 1,
        },
        {
            category: "Seal It Up",
            appliance: "metal-duct",
            room: "basement",
            image: null,
            text: "This metal ductwork moves heated or cooled air behind the walls, ceilings or floors in the home to where it is needed. Openings in ductwork leak air that should reach the living areas of a home.  Duct leaks cause rooms to feel warmer, cooler or more humid than they should. Not in this house!",
            num: 1,
        },
        {
            category: "Seal It Up",
            appliance: "window",
            room: "bathroom",
            image: null,
            text: "The family closes windows and doors when the furnace or air conditioner is on. They use blinds, drapes, tints or films to cover windows and keep the right temperature inside! If the house is not being heated or cooled, they might leave windows open to let a cool breeze into the home. ",
            num: 1,
        },
        {
            category: "Seal It Up",
            appliance: "waterheater",
            room: "basement",
            image: null,
            text: "This hot water pipe insulation was added to the water heater’s hot water pipe. It keeps heat in the water where the family needs it.",
            num: 1,
        },
        {
            category: "Flow Low",
            appliance: "showerhead",
            room: "upstairs-bathroom",
            image: "Showerhead.svg, Bathroom-Aerator.svg",
            text: "This home has efficient technologies like shower heads and faucet aerators. They save water and the energy used to heat the water. Did you know that when you save water, you also save energy?",
            num: 1,
        },
        {
            category: "Flow Low",
            appliance: "water-outlet",
            room: "outside",
            image: null,
            text: "Do not overwater! The average lawn needs only about 1 inch of water per week. The family waters in the early morning or evening to reduce evaporation. They also chose plants with low water needs.",
            num: 1,
            position: "far right",
        },
        {
            category: "Flow Low",
            appliance: "showerhead",
            room: "bathroom",
            image: null,
            text: "Showers generally use less water than baths. This high-efficiency shower head is an efficient technology. The shower timer below reminds the family to use the wise behavior of taking shorter showers.",
            num: 1,
        },
        {
            category: "Flow Low",
            appliance: "toilet-tank",
            room: "bathroom",
            image: null,
            text: "Toilets use more water than anything else in the home. The WaterSense<sup>&reg;</sup> label helped this family purchase water efficient toilets. Toilet leak tablets helped discover a water wasting leak, too. Mom opened the tank and popped one in. It dissolved in 15 minutes. The bowl was blue before she flushed, so she knew there was a leak to fix.",
            num: 1,
        },
        {
            category: "Flow Low",
            appliance: "faucet",
            room: "bathroom",
            image: null,
            text: "Sister is using a wise water behavior by turning the water off when she brushes her teeth.",
            position: "far right",
            num: 1,
        },
        {
            category: "Be Smart",
            appliance: "car",
            room: "outside",
            image: "outside-car.svg",
            imageStyle: "small",
            text: "The Average Kids' Top Five Car Tips<ol><li>Walk, ride a bike or use mass transit.</li><li>Carpool, ride share and combine car trips.</li><li>Remind an adult to maintain your vehicle! Dirty air filters and engine oil, low tire pressure and using incorrect types of tires waste fuel. </li><li>Never idle! Idling a car for 10 seconds uses more fuel than turning the car off and on.</li><li>Remind drivers to obey speed limits and avoid aggressive driving and extra weight in the vehicle. You’ll help them drive more miles with the same amount of fuel.</li></ol>",
            num: 1,
            position: "far left",
        },
        {
            category: "Flow Low",
            appliance: "faucet",
            room: "kitchen",
            image: "kitchen-faucet.svg",
            text: "Water leaks make up about 14 percent of our water use. You won’t find a leaky faucet, shower head or sprinkler at this home.",
            num: 1,
        },
        {
            category: "Did You Know?",
            appliance: "sun",
            room: "outside",
            image: null,
            text: "Energy is the ability to do work. The sun is the energy that powers the wind, the water cycle and photosynthesis. Food provides the energy that powers our bodies. Energy comes from natural resources, which are anything that we use that comes from the earth or sun. Renewable energy sources like sun, water, wind and biomass can be naturally replaced. Energy resources like natural gas, coal, oil and uranium are replaced very slowly or are not replaced at all.",
            num: 1,
            position: "far right",
        },
        {
            category: "Did You Know?",
            appliance: "wind",
            room: "outside",
            image: null,
            text: "Both energy efficiency and wise energy behaviors are needed to save energy. Energy efficiency is managing the consumption of energy through the use of efficient technologies like low flow water devices, LED bulbs or a smart thermostat. Efficient technologies make saving energy easy! Wise energy behaviors, like taking a short shower or turning off the lights, are important ways for people of all ages to save energy.",
            num: 1,
            position: "far right",
        },
        ],
    },

    // Mutations are functions that can change variables in Vuex
    mutations: {
        setCharacter(state, character) {
//            console.log("setCharacter");
            state.character = character;
        },
        setAnswer(state, payload) {
//            console.log(state);
            state.answers[payload.question] = (payload.answer == state.questions[payload.question].answers[state.questions[payload.question].correctAnswerIndex]);
        },
        resetCharacter(state) {
//            console.log("resetCharacter");
            state.character = null;
        },
        resetAnswers(state) {
  //          console.log("resetAnswer");
            for(var i in state.answers) {
                state.answers[i] = null;
            }

            var m = state.questions.length, t, i;

            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = state.questions[m];
                state.questions[m] = state.questions[i];
                state.questions[i] = t;
            }

            state.randomQuestions = state.questions.slice(0, 5);
        }
    },

    // Functions that return variables stored here, along with additional information
    getters: {
        // Returns both a question and its possible answers, with the correct answer occupying the first slot
        // question: The question that's being asked
        // type: The type of question being asked
        //  - choice: A multiple choice question
        //  - limit: A question that has an answer with a certain amount of characters
        //  - number: A question with a number answer the user must input
        // answers: If choice question, array of possible answers to a choice question. If limit or number, the correct answer
        // result: The description of the result after submittal
        
        questions(state) {
          var questionCount = 5;
          if (typeof window.nefHouseConfig.questionCount != "undefined") {
            questionCount = window.nefHouseConfig.questionCount;
          }
//            console.log("getQuestions");
            var m = state.questions.length, t, i;

            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = state.questions[m];
                state.questions[m] = state.questions[i];
                state.questions[i] = t;
            }

            state.randomQuestions = state.questions.slice(0, questionCount);
            return state.randomQuestions;
        },

        // Returns the total score
        score(state, getters) {
//            console.log("score");
            var score = 0;
            getters.questions.forEach((v, i) => {
                if(typeof state.answers[i] != "undefined" && state.answers[i] == 1) score += 10;
            });
            return score;
        },

        // Returns the list of tooltips
        tooltips(state) {
            return state.tooltips;
        }
    },
})
