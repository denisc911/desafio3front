import React from 'react';
import { Formik } from 'formik';

const FormPersonalized = () => (
  <div>
    <h1>¿Cuál es el precio del objetivo?</h1>
    <Formik
      initialValues={{ 
        objetivo: '',
        tiempoObjetivo: '',
    }}
      validate={values => {
        const errors = {};
        // Validar que el precio del objetivo no esté vacío y sea un número válido
        if (!values.objetivo) {
          errors.objetivo = 'El precio del objetivo es requerido';

        } else if (isNaN(values.objetivo)) {
          errors.objetivo = 'Debe ser un número válido';
          errors.tiempoObjetivo = 'Debe ser un número válido'
        } else if (values.objetivo <= 0) {
          errors.objetivo = 'El importe debe ser mayor que 0';
          errors.objetivo = 'El importe debe ser mayor que 0';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2)); // Esto puede ser reemplazado con una acción real
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="objetivo">Introduce el importe necesario:</label>
          <input
            type="number"
            name="objetivo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.objetivo}
            placeholder="Ej: 10000"
          />
          {errors.objetivo && touched.objetivo && <div>{errors.objetivo}</div>}
          <button type="submit" disabled={isSubmitting}>
            Siguiente
          </button>

          <label htmlFor="tiempoObjetivo">Introduce el tiempo, en meses, en el que deseas alcanzar el objetivo:</label>
          <a> Meses </a>
          <input
            type="number"
            name="tiempoObjetivo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tiempoObjetivo}
            placeholder="Ej: 12 meses"
          /> 
          {errors.tiempoObjetivo && touched.tiempoObjetivo && <div>{errors.tiempoObjetivo}</div>}
          <button type="submit" disabled={isSubmitting}>
            Siguiente
          </button>

        </form>
      )}
    </Formik>
  </div>
);

export default FormPersonalized;
