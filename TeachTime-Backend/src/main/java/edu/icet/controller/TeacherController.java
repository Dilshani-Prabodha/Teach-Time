package edu.icet.controller;

import edu.icet.dto.Teacher;
import edu.icet.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
@RequiredArgsConstructor
@CrossOrigin
public class TeacherController {
    @Autowired
    final TeacherService teacherService;
    @GetMapping("/get-allteacher")
    public List<Teacher> getTeacher(){
        return teacherService.getAll();
    }
    @PostMapping("/add-teacher")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTeacher(@RequestBody Teacher teacher){
        teacherService.addTeacher(teacher);
    }
    @GetMapping("/search-by-teacherid/{teacherId}")
    public Teacher getTeacherById(@PathVariable Integer teacherId){
        return teacherService.searchTeacherById(teacherId);
    }

    @DeleteMapping("/delete-by-teacherid/{teacherId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteTeacherById(@PathVariable Integer teacherId){
        teacherService.deleteTeacherById(teacherId);
    }

    @PutMapping("/update-teacher")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateTeacher(@RequestBody Teacher teacher){
        teacherService.updateTeacherById(teacher);
    }
}
