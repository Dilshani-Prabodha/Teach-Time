package edu.icet.service;

import edu.icet.dto.Teacher;
import edu.icet.entity.TeacherEntity;
import edu.icet.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService{

    private final TeacherRepository teacherRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<Teacher> getAll() {
        List<Teacher> teacherArrayList =new ArrayList<>();
        teacherRepository.findAll().forEach(teacherEntity ->{
            teacherArrayList.add(modelMapper.map(teacherEntity, Teacher.class));
        });
        return teacherArrayList;
    }

    @Override
    public void addTeacher(Teacher teacher) {
        teacherRepository.save(modelMapper.map(teacher, TeacherEntity.class));
    }

    @Override
    public Teacher searchTeacherById(Integer id) {
        return modelMapper.map(teacherRepository.findById(id), Teacher.class);
    }

    @Override
    public void deleteTeacherById(Integer id) {
        teacherRepository.deleteById(id);
    }

    @Override
    public void updateTeacherById(Teacher teacher) {
        teacherRepository.save(modelMapper.map(teacher,TeacherEntity.class));
    }
}
