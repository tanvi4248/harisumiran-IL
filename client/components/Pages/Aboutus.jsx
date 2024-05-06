import Footerbottom from "../Footer/Footerbottom";
export default function Aboutus() {
  return (
    <>
      <div className="font-['Playfair_Display'] font-bold text-5xl p-9 bg-title text-white mb-9">
        About Us
      </div>
      <div className="container">
        <p className="mb-6">
          Harisumiran is a trusted hindu spiritual and humanitarian charity
          organization. With its vast network of centers and volunteers
          world-wide, the organization has enabled hundreds of thousands of
          children, youth and families to lead a happy, peaceful and harmonious
          life.
        </p>
        <p className="mb-6">
          Motivated by our faith in Lord Swaminarayan, Harisumiran serves the
          global community alongside all people, regardless of religion, race,
          ethnicity, or gender.
        </p>
        <p className="mb-6">
          Founded in 1974 by its spiritual head His Divine Holiness Guru
          Hariprasad Swamiji and actively operating in over 500 centers
          world-wide in countries like India, USA, Canada, Australia,
          New-Zealand, United Kingdom, Germany, France, South Africa, Kenya.
        </p>

        <div className="flex mb-6 -ml-3 -mr-3">
          <div className="w-1/2 px-3">
            <h3 className="font-bold mb-1">Our Values</h3>
            <p>
              We operate under the universal values and guidelines as taught by
              Lord Swaminarayan which is a blend of the spiritual essence of
              Hinduism and universal principles of other religions of the world.
            </p>
          </div>
          <div className="w-1/2 px-3 ">
            <h3 className="font-bold mb-1">Devotion</h3>
            <p>
              All our activities will be carried on with utmost devotion with
              the guideline of ‘Selfless Service unto Mankind and Devotion unto
              God’.
            </p>
          </div>
        </div>
        <div className="flex mb-6 -ml-3 -mr-3">
          <div className="w-1/2 px-3">
            <h3 className="font-bold mb-1">Atmiyata</h3>
            <p>
              We will live and operate in harmony with self, friends, family,
              society and environment.
            </p>
          </div>
          <div className="w-1/2 px-3">
            <h3 className="font-bold mb-1">Suhradbhav</h3>
            <p>
              Our activities will enable Universal Brotherhood where one
              considers themselves and everyone as children of god.
            </p>
          </div>
        </div>
        <div className="flex mb-6 -ml-3 -mr-3">
          <div className="w-1/2 px-3">
            <h3 className="font-bold mb-1">Our Mission</h3>
            <p>
              To serve the individual, family, society and environment with wide
              range of humanitarian and spiritual activities based on our
              deep-rooted faith in Lord Swaminarayan to enable the highest
              quality of life.
            </p>
          </div>
          <div className="w-1/2 px-3">
            <h3 className="font-bold mb-1">Our Vision</h3>
            <p>
              Serve the society by providing spiritual services, cultural
              training and other human services like health-care and educational
              activities on a secular basis to promote community development,
              family values enrichment, educational literacy, good-health and
              self-sufficiency and enable happy, peaceful and harmonious life.
            </p>
          </div>
        </div>
      </div>
      <Footerbottom></Footerbottom>
    </>
  );
}
