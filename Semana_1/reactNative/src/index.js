import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Api from "./services/api";

/**
 * View: div,footer,header,main,aside,section
 * Text: p,span,strong,h1,h2,hx
 *
 * Os elementos nao possuem valor semantico (significado)
 * Nao possuem estilizacao propria, tudo precisa ser feito apartir de um css personalizado
 *
 * Todos os componentes do react Native possuem por padrao o display flex
 *
 * No React Native nao existe heranca de estilo, ou seja, o componente externo nao pode definir o estilo dos componentes internos
 */

export default function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    Api.get("projects").then((response) => {
      setProject(response.data);
    });
  }, []);

  async function handleAddProject() {
    let response = await Api.post("projects", {
      title: `Projeto - ${Date.now()}`,
      owner: `Rafael Muniz`,
    });

    setProject([...projects, response.data]);
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#7159C1"
        translucent="False"
      />
      {/* <View style={styles.container}>
        {projects.map((project) => (
          <Text key={project.id} style={styles.project}>
            {project.title}
          </Text>
        ))}
      </View> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: "#7159C1",
  }, //propriedade personalizada
  project: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    margin: 0,
    padding: 0,
  },
  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
