// Father Earth Core Attributes
const FatherEarthDNA = {
    // Movement Speeds
    speeds: {
        slow: 2,
        medium: 5,
        fast: 8,
        superFast: 12
    },
    // Physics
    gravity: 0.6,
    jumpStrength: -12,
    terminalVelocity: 15,
    
    // Character Info
    name: "Father Earth",
    description: "Guardian of the Arcade",
    
    // This function can be used by any game to get the right speed
    getSpeedValue: function(type) {
        return this.speeds[type] || this.speeds.medium;
    }
};

// Make it accessible globally
window.FatherEarthDNA = FatherEarthDNA;
