import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
export default function Address() {
  return (
    <div className="address-main w-1/2 px-2">
      <div className="address-inner flex justify-center flex-col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11829.886298526164!2d-87.99804725919977!3d42.16159344510518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbceb7be52703%3A0x993e895815ffd682!2s1670%20Checker%20Rd%2C%20Long%20Grove%2C%20IL%2060047!5e0!3m2!1sen!2sus!4v1713468587877!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="add-phone mt-10">
          <div className="address">
            <LocationOnIcon></LocationOnIcon>
            1670 Checker Rd, Long Grove, IL 60047
          </div>
          <div className="phone">
            <SmartphoneIcon></SmartphoneIcon> (224) 339-9360
          </div>
        </div>
      </div>
    </div>
  );
}
