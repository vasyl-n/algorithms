const Infant = function() {
}
const infant = new Infant();

Infant.prototype.cry = function() {
  console.log('infant is crying')
  this.trigger('cry')
}


const addEventSystem = function(object) {
  object.prototype.events = {};
  object.prototype.on = function(target, cb) {
    if( this.events[target] ) {
      this.events[target].push(cb);
    } else {
      this.events[target] = [cb];
    }
  }

  object.prototype.trigger = function(e) {

    this.events[e].forEach((cb) => {
      cb()
    })
  }
}




const Mom = function() {
}

Mom.prototype.sing = function() {
  console.log('mom is singing');
}

const Dad = function() {
}

Dad.prototype.cry = function() {
  console.log('dad is crying');
  this.trigger('cry')
}


const mom = new Mom();
const dad = new Dad();

addEventSystem(Infant)
infant.on('cry', mom.sing)

addEventSystem(Dad)
addEventSystem(Mom)

dad.on('cry', mom.sing);
infant.cry();
dad.cry();