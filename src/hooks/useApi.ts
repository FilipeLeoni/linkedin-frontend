import api from '../services/api';

export const useApi = () => ({
    login: async (email: string, password: string, type: string | any) => {
        const res: any = await api.post('/auth/login', {
            email,
            password,
            type,
        });
        return res.data;
    },

    validateToken: async (token: string) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const res: any = await api.get('/auth/user-logged', config);
        return res.data;
    },

    registerUser: async (
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    ) => {
        const res: any = await api.post('/user', {
            name,
            email,
            password,
            confirmPassword,
        });
        return res.data;
    },

    registerCompany: async (
        companyName: string,
        email: string,
        cnpj: string,
        password: string,
        passwordConfirmation: string,
    ) => {
        const res: any = await api.post('/company', {
            companyName,
            email,
            cnpj,
            password,
            passwordConfirmation,
        });
        return res.data;
    },

    userRecoveryPassword: async (email: string) => {
        const res: any = await api.patch('/user/recovery_password', {
            email,
        });
        return res.data;
    },

    companyRecoveryPassword: async (email: string) => {
        const res: any = await api.patch('/company/recovery-password', {
            email,
        });
        return res.data;
    },

    userUpdatePassword: async (
        password: string,
        confirmPassword: string,
        recoverPasswordToken: string,
    ) => {
        const res: any = await api.patch('/user/update_password', {
            password,
            confirmPassword,
            recoverPasswordToken,
        });
        return res.data;
    },

    companyUpdatePassword: async (
        password: string,
        confirmPassword: string,
        recoverPasswordToken: string,
    ) => {
        const res: any = await api.patch('/company/update_password', {
            password,
            confirmPassword,
            recoverPasswordToken,
        });
        return res.data;
    },

    updateCompanyProfile: async (formData: any) => {
        const token = localStorage.getItem('authToken');
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };
        const res: any = await api.put('/company/edit', formData, { headers });
        return res.data;
    },

    createJob: async (JobData: any) => {
        const token = localStorage.getItem('authToken');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const res: any = await api.post('/job', { JobData }, { headers });
        return res.data;
    },

    getJobs: async (
        page: number = 1,
        order: string = 'ASC',
        modality: string = '',
    ) => {
        const url = `/job?order=${order}&page=${page}&take=10&orderByColumn=id&modality=${modality}`;
        const res: any = await api.get(url);
        return res.data;
    },

    getJobById: async (id: number) => {
        const url = `/job/${id}`;
        const res: any = await api.get(url);
        return res.data;
    },

    getCompanyById: async (id: string | null) => {
        const res: any = await api.get(`/company/${id}`);
        return res.data;
    },

    deleteJob: async (id: string) => {
        const res: any = await api.patch(`/job/${id}`)
        return res.data;
    },

    getJobsByCompany: async (id: string) => {
        const res: any = await api.get(`/job/all/${id}`);
        return res.data;
    },

    searchJobs: async (keyword: string, page: number = 1, filters: any = {}) => {
        const url = `/job/search/${keyword}?order=ASC&page=${page}&take=10&orderByColumn=id`;
        const res: any = await api.post(url, filters);
        return res.data;
    },

    getUserCurriculum: async (token: string | null) => {
        const res: any = await api.get(`/curriculum`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    },

    ApplyJob: async (jobId: string, curriculumId: string) => {
        const url = `/applications?job_id=${jobId}&curriculum_id=${curriculumId}`;
        const token = localStorage.getItem('authToken');
        const res: any = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    },
});
