
const Contact = () => {
  return (
    
    <section className="bg-dark-grey lg:bg-stars">
      <h2 className="text-grey">Contact.</h2>
      <div>
        <span>
          
          <p className="text-orange">Adresse</p>
          <p>36 rue des Peupliers Paris (75018) France</p>
        </span>
        <span>
          <p className="text-orange">Mail</p>
          <p>olivier.depiesse@gmail.com</p>
        </span>
        <span>
          <p className="text-orange">Téléphone</p>
          <p>06 54 84 54 75</p>
        </span>
      </div>
      <div className="">
        <h1 className="text-grey">
          Utilisez le formulaire ci-dessous pour me contacter
        </h1>
        <p>
          Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu
          non diam phasellus. Scelerisque felis imperdiet proin fermentum leo.
          Amet volutpat consequat mauris nunc congue..
        </p>
        <div>
          <p className="bg-dark border px-6 py-4">Votre nom :</p>
          <span className="rounded border border-grey-3 "></span>
          <p className="bg-dark border px-6 py-4">Votre email :</p>
          <span className="rounded border border-grey-3"></span>
          <p>Message :</p>
          <span className="rounded border border-grey-3"></span>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-dark-red border-0 py-2 px-8 rounded">
            Envoyer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
