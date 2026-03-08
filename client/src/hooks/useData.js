import { useState, useEffect } from 'react'
import { projectsApi, skillsApi, experienceApi } from '../services/api'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await projectsApi.getAll()
        setProjects(res.data || [])
      } catch (err) {
        setError(err.message)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export const useSkills = () => {
  const [skills, setSkills] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await skillsApi.getAll()
        setSkills(res.grouped || {})
      } catch (err) {
        setError(err.message)
        setSkills({})
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [])

  return { skills, loading, error }
}

export const useExperience = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await experienceApi.getAll()
        setExperiences(res.data || [])
      } catch (err) {
        setError(err.message)
        setExperiences([])
      } finally {
        setLoading(false)
      }
    }
    fetchExperience()
  }, [])

  return { experiences, loading, error }
}

// No static fallbacks here anymore — data now truly depends on the backend/database.
