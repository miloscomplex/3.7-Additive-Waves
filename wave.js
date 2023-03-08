class Wave {
    constructor(amp, period, phase) {
        this.ammplitude = amp;
        this.period = period;
        this.phase = phase;
    }

    evaluate(x) {
        return sin(this.phase + TWO_PI * x / this.period) * this.ammplitude
    }

    update() {
        this.phase += 0.03
    }
}