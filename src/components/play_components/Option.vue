<template>
  <div class="option">
    <div class="btns d-flex justify-content-end mb-4 mt-4">
      <button class="mr-4">Submit</button>
      <button>Skip</button>
    </div>
    <div class="optionsList">
      <div class="optionCard" v-for="option in options" :key="option.id">
        <div class="mRow d-flex">
          <div class="alpha">
            <h1>{{ option.alpha }}</h1>
          </div>
          <div class="text">
            <p>{{ option.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option',
  data: function() {
    return {
      options: [
        {
          id: 1,
          alpha: 'A',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni vero obcaecati harum saepe cumque dolor voluptatem, tenetur adipisci excepturi. Enim, laudantium asperiores. Quo ex blanditiis dicta mollitia soluta vel.',
        },
        {
          id: 2,
          alpha: 'B',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni vero obcaecati harum saepe cumque dolor voluptatem, tenetur adipisci excepturi. Enim, laudantium asperiores. Quo ex blanditiis dicta mollitia soluta vel.',
        },
        {
          id: 3,
          alpha: 'C',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni vero obcaecati harum saepe cumque dolor voluptatem, tenetur adipisci excepturi. Enim, laudantium asperiores. Quo ex blanditiis dicta mollitia soluta vel.',
        },
        {
          id: 4,
          alpha: 'D',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Voluptates magni vero obcaecati harum saepe cumque dolor voluptatem, tenetur adipisci excepturi. Enim, laudantium asperiores. Quo ex blanditiis dicta mollitia soluta vel.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$shadow: #ebebeb;

.option {
  padding: 20px 40px 20px 20px;
}

button {
  border: 1px solid #ff7533;
  background-color: transparent;
  color: #ff7533;
  padding: 10px 25px;
  border-radius: 5px;
}

button:hover {
  background-color: #ff7533;
  color: #fff;
}

button:focus{
  outline: none;
}

.timer {
  position: relative;
  width: 100px;
  height: auto;
  h3 {
    font-weight: bold;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.optionsList {
  margin-top: 20px;
}

.optionCard {
  margin-bottom: 20px;
  max-width: 800px;
  background-color: #fff;
  box-shadow: 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow, 0 3px 10px $shadow;
  border-radius: 10px;
  cursor: pointer;
  .alpha {
    min-width: 100px;
    min-height: 100px;
    margin-right: 20px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    h1 {
      margin: 0px;
      font-weight: bold;
    }
  }

  .text {
    padding: 10px;
    p {
      margin: 0px;
    }
  }
}

.optionCard:hover {
  background-color: #ff7533;
  color: #fff;
  .alpha {
    background-color: #303938;
  }
}
</style>
