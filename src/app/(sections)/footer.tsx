function Footer() {
  return (
    <footer className="bg-gray-900 px-12 py-24">
      <div className="flex flex-row gap-12">
        <div className="flex-[0.6]">
          <h2 className="text-xl py-4 text-red-500 font-semibold">About Cineverse</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque blanditiis debitis, sapiente nobis
            repudiandae, nisi numquam doloremque suscipit sit facere reiciendis aliquam. Ducimus, voluptate tenetur
            fugiat in quaerat consectetur.
          </p>
        </div>
        <div className="list-none flex-[0.15]">
          <h2 className="text-xl py-4 text-red-500 font-semibold">Social</h2>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
        </div>
        <div className="flex-[0.25]">
          <h2 className="text-xl py-4 text-red-500 font-semibold">Contact</h2>
          <p>+1 227-342-34</p>
          <p>1415 N Pickett St, Alexandria, VA 22304</p>
          <p>enquiry@cineverse.com</p>
        </div>
      </div>
      <p className="text-xs font-semibold text-red-500 mt-4 tracking-widest">2024 © CINEVERSE / Ticketing</p>
    </footer>
  );
}

export default Footer;
