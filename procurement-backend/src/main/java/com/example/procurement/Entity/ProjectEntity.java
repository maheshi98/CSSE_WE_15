package com.example.procurement.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Project")
public class ProjectEntity {

    @Id
    private String id;
    private String projectId;
    private String name;
    private String location;
    private UserEntity projectManager;

    public ProjectEntity(String id, String projectId, String name, String location) {
        this.id = id;
        this.projectId = projectId;
        this.name = name;
        this.location = location;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public UserEntity getProjectManager() {
        return projectManager;
    }

    public void setProjectManager(UserEntity projectManager) {
        this.projectManager = projectManager;
    }
}
