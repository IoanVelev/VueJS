<template>
  <div class="memory-game-container">
    <h1>Memory Game</h1>
    
    <div class="game-board">
      <div 
        v-for="card in cards" 
        :key="card.id" 
        class="card"
      >
        <div class="card-inner">
          <div class="card-front">
            <img :src="card.image" :alt="card.name">
          </div>
          <div class="card-back">
            <div class="card-pattern"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryGame',
  data() {
    return {
      cards: [
        // Each card appears twice in the array for pairs
        { id: 1, name: 'Vue', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', isFlipped: false, isMatched: false },
        { id: 2, name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', isFlipped: false, isMatched: false },
        { id: 3, name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', isFlipped: false, isMatched: false },
        { id: 4, name: 'Vue', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', isFlipped: false, isMatched: false },
        { id: 5, name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', isFlipped: false, isMatched: false },
        { id: 6, name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', isFlipped: false, isMatched: false }
      ]
    }
  }
}
</script>

<style>
.memory-game-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.card-front {
  background-color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.card-front img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.card-back {
  background-color: #2c3e50;
}

.card-pattern {
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 0px,
    rgba(255, 255, 255, 0.1) 10px,
    transparent 10px,
    transparent 20px
  );
}

/* This class will be used later for card flipping logic */
.card-inner.is-flipped {
  transform: rotateY(180deg);
}
</style>