import IAgenda from './interfaces/IAgenda';

abstract class Quadra {
  protected abstract reservar<T>(date: Date): IAgenda<T>;
}

export default Quadra;
