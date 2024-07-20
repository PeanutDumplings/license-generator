import mit_l from "./templates/mit-l";
import gnu_gpl_v3 from "./templates/gnu-gpl-v3";
import gnu_agpl_v3 from "./templates/gnu-agpl-v3";
import gnu_lgpl_v3 from "./templates/gnu-lgpl-v3";
import mozilla_pl_v2 from "./templates/mozilla-pl-v2";
import apache_l_v2 from "./templates/apache-l-v2";
import boost_l_v1 from "./templates/boost-l-v1";
import the_unlicense from "./templates/the-unlicense";

const licenses = [
  { name: "mit", license: mit_l },
  { name: "gnu_gpl_v3", license: gnu_gpl_v3 },
  { name: "gnu_agpl_v3", license: gnu_agpl_v3 },
  { name: "gnu_lgpl_v3", license: gnu_lgpl_v3 },
  { name: "mozilla_pl_v2", license: mozilla_pl_v2 },
  { name: "apache_l_v2", license: apache_l_v2 },
  { name: "boost_l_v1", license: boost_l_v1 },
  { name: "the_unlicense", license: the_unlicense },
];

export default licenses;
