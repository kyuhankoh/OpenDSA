/**
 * Stub version of the Exercises object used in the live Khan Academy site.
 */
window.Exercises = {
    localMode: true,

    useKatex: true,

    khanExercisesUrlBase: "/ODSAkhan-exercises/",

    getCurrentFramework: function() {
        return "khan-exercises";
    },

    PerseusBridge: {
        cleanupProblem: function() {
            return false;
        }
    }
};