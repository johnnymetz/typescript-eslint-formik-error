import { Formik } from 'formik';

function App() {
  return (
    <div>
      <h1>Typescript eslint formik error demo</h1>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        initialValues={{ name: 'Steve' }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <button
                type="button"
                onClick={() => {
                  setFieldValue('name', 'Johnny');
                }}
              >
                Set name to "Johnny"
              </button>
            </div>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
