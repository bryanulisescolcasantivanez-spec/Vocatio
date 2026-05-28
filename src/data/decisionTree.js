export const decisionTree = {
  question: "¿Te gusta resolver problemas lógicos?",
  yes: {
    question: "¿Te apasiona la tecnología?",
    yes: {
      question: "¿Te interesa programar aplicaciones?",
      yes: {
        question: "¿Prefieres crear software o analizar datos?",
        yes: {
          question: "¿Te gusta desarrollar interfaces visuales?",
          yes: {
            career: "Ingeniería de Software",
            desc: "Desarrollo de aplicaciones y sistemas."
          },
          no: {
            career: "Desarrollo Backend",
            desc: "Construcción de servidores y bases de datos."
          }
        },
        no: {
          question: "¿Te interesa la inteligencia artificial?",
          yes: {
            career: "Ciencia de Datos",
            desc: "Modelos inteligentes y análisis predictivo."
          },
          no: {
            career: "Análisis de Datos",
            desc: "Interpretación de grandes volúmenes de información."
          }
        }
      },
      no: {
        question: "¿Te interesa proteger sistemas?",
        yes: {
          career: "Ciberseguridad",
          desc: "Protección de redes y sistemas."
        },
        no: {
          career: "Redes y Telecomunicaciones",
          desc: "Infraestructura digital y conectividad."
        }
      }
    },
    no: {
      question: "¿Te interesa la gestión empresarial?",
      yes: {
        question: "¿Te gusta liderar equipos?",
        yes: {
          career: "Administración de Empresas",
          desc: "Dirección y organización empresarial."
        },
        no: {
          career: "Economía",
          desc: "Análisis financiero y mercados."
        }
      },
      no: {
        question: "¿Te gustan los números?",
        yes: {
          career: "Contabilidad",
          desc: "Gestión financiera y auditoría."
        },
        no: {
          career: "Derecho",
          desc: "Interpretación y aplicación de leyes."
        }
      }
    }
  },

  no: {
    question: "¿Te gusta ayudar a las personas?",
    yes: {
      question: "¿Te interesa el área de la salud?",
      yes: {
        question: "¿Prefieres atención clínica o investigación?",
        yes: {
          career: "Medicina",
          desc: "Diagnóstico y tratamiento de pacientes."
        },
        no: {
          career: "Biotecnología",
          desc: "Investigación científica aplicada."
        }
      },
      no: {
        question: "¿Te interesa comprender emociones y conducta?",
        yes: {
          career: "Psicología",
          desc: "Estudio del comportamiento humano."
        },
        no: {
          career: "Educación",
          desc: "Formación y enseñanza."
        }
      }
    },

    no: {
      question: "¿Te consideras creativo?",
      yes: {
        question: "¿Te atrae el arte visual?",
        yes: {
          question: "¿Prefieres diseño digital o físico?",
          yes: {
            career: "Diseño Gráfico",
            desc: "Comunicación visual y branding."
          },
          no: {
            career: "Arquitectura",
            desc: "Diseño de espacios y estructuras."
          }
        },
        no: {
          question: "¿Te gusta crear contenido?",
          yes: {
            career: "Comunicación Audiovisual",
            desc: "Producción multimedia."
          },
          no: {
            career: "Música",
            desc: "Creación e interpretación musical."
          }
        }
      },

      no: {
        question: "¿Te interesa la naturaleza?",
        yes: {
          question: "¿Te gusta investigar fenómenos naturales?",
          yes: {
            career: "Ingeniería Ambiental",
            desc: "Protección y gestión ambiental."
          },
          no: {
            career: "Química",
            desc: "Investigación de sustancias y materiales."
          }
        },
        no: {
          question: "¿Te interesan los negocios globales?",
          yes: {
            career: "Negocios Internacionales",
            desc: "Comercio y estrategia global."
          },
          no: {
            career: "Turismo y Hotelería",
            desc: "Gestión de servicios turísticos."
          }
        }
      }
    }
  }
};