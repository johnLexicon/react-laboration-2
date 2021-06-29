const About = () => {
  return (
    <div className="container mt-5 rounded shadow h4 bg-success bg-gradient p-4 text-light">
      <h1 className="my-4">Laborationsuppfigt 2 React</h1>
      <p>Du ska i denna laborationsuppgift göra följande:</p>{' '}
      <p>
        Den här gången vill jag att du ska bygga en inköpslista. Jag vill att
        man ska kunna lägga till en produkt i en lista genom ett inputfält på
        sidan samt att den listan ska renderas ut på sidan.Har man skrivit fel
        på en produkt så vill jag att det ska gå att ändra texten på den, samt
        att jag vill kunna klarmarkera produkten så att det syns att den är
        inhandlad.När en produkt är klarmarkerad så vill jag att den ändrar
        utseende samt att denflyttas så att alla “klara”produkter hamnar längst
        ner på sidan.
      </p>
      <p>
        Det ska även gå att plocka bort produkter helt om man skulle ångra sig
        och inte vill ha den produkten längre.Det ska även gå att tömma hela
        listan på produkter.
      </p>
    </div>
  );
};

export default About;
