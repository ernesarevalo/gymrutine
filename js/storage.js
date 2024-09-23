//storage.js

document.addEventListener('DOMContentLoaded', function() {
    const exercises = ['press-militar', 'flexiones'];

    exercises.forEach(exercise => {
        const repsInput = document.getElementById(`${exercise}-reps`);
        const weightInput = document.getElementById(`${exercise}-peso`);

        // Cargar valores almacenados
        repsInput.value = localStorage.getItem(`${exercise}-reps`) || '';
        weightInput.value = localStorage.getItem(`${exercise}-peso`) || '';

        // Guardar valores cuando cambien
        repsInput.addEventListener('input', () => {
            localStorage.setItem(`${exercise}-reps`, repsInput.value);
        });

        weightInput.addEventListener('input', () => {
            localStorage.setItem(`${exercise}-peso`, weightInput.value);
        });
    });
});
