package edu.icet.service;

import edu.icet.dto.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getAll();
    void addTeacher(Teacher teacher);
    Teacher searchTeacherById(Integer id);
    void deleteTeacherById(Integer id);
    void updateTeacherById(Teacher teacher);
}
